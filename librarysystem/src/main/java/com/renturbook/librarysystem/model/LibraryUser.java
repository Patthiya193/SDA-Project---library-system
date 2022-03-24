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
    private String name;
    private String email;
    @ElementCollection
    private List<Long> favoriteBooks; // list of book ids

    public LibraryUser(String username, String email , String name) {
        this.username = username;
        this.name = name;
        this.favoriteBooks = Collections.<Long>emptyList();
        this.email = email;
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
        return name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFavoriteBooks(List<Long> favoriteBooks) {
        this.favoriteBooks = favoriteBooks;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Book> getFavoriteBooks() {
        List<Book> favBooks = Collections.<Book>emptyList();

        return favBooks;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    public void addFavoriteBooks(Long favoriteBooksId) {

        this.favoriteBooks.add(favoriteBooksId);
    }
}
