package com.renturbook.librarysystem.model;


import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Entity
@Table
public class LibraryUser {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String username;
    private String password;
    private String firstName;

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    private String lastName;
    private String userType;

    @ElementCollection
    private List<Long> favoriteBooks; // list of book ids

    public LibraryUser(String username, String password , String firstName, String lastName, List<Long> favoriteBooks) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteBooks = favoriteBooks;
        this.password = password;
        this.userType = "normal";
    }

    public LibraryUser() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return this.firstName + " " + this.lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String newPwd) {
        this.password = newPwd;
    }

    public void setFavoriteBooks(List<Long> favoriteBooks) {
        this.favoriteBooks = favoriteBooks;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    public void setLastName(String name) { this.lastName = name; }

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public List<Long> getFavoriteBooks() {

        return this.favoriteBooks;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", name='" + getName() + '\'' +
                ", type='" + getUserType() + '\'' +
                ", fav=" + favoriteBooks +
                '}';
    }

    public void addFavoriteBooks(Long favoriteBooksId) {
        this.favoriteBooks.add(favoriteBooksId);
    }

    public void removeFavoriteBooks( Long favoriteBooksId) {
        System.out.println("&&&&&&&&\n\n" + this.favoriteBooks);
        this.favoriteBooks.remove( favoriteBooksId );
        System.out.println("&&&&&&&&\n\n" + this.favoriteBooks);
    }
}
