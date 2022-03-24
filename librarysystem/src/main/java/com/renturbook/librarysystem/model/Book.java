package com.renturbook.librarysystem.model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Book {
    @Id
    @SequenceGenerator(
            name = "book_sequence",
            sequenceName = "book_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "book_sequence"
    )
    private Long id;
    private String bookName;

    @Column(nullable = true, length = 64)
    private String coverImage;

    @ElementCollection
    private List<String> authors;

    public Book() {}

    public Book(String bookName, List<String> authors) {
        this.bookName = bookName;
        this.authors = authors;
        this.coverImage = "";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public List<String> getAuthors() {
        return authors;
    }

    public void setAuthors(List<String> authors) {
        this.authors = authors;
    }

    @Override
    public String toString() {
        return "Book{" +
                "book id='" + id + '\'' +
                ", book name='" + bookName + '\'' +
                '}';
    }

    public void addAuthor( String author ) {
        this.authors.add( author );
    }
}
