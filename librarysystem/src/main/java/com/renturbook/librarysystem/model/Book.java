package com.renturbook.librarysystem.model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import com.renturbook.librarysystem.AvailableState;
import com.renturbook.librarysystem.BookState;
import com.renturbook.librarysystem.ReservedState;
import com.renturbook.librarysystem.UnavailableState;

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
    private String category;
    private Long borrowedBy;
    private String curState;

    @Column(nullable = true, length = 64)
    private String coverImage;

    @ElementCollection
    private List<String> authors;

    @Transient
    private BookState availableState;
    @Transient
    private BookState unvailableState;
    @Transient
    private BookState reservedState;
    @Transient
    private BookState currentState;
    public Book() {

    }

    public Book(String bookName, String category, String currentState, Long borrowedBy, List<String> authors) {
        this.bookName = bookName;
        this.authors = authors;
        this.category = category;
        this.coverImage = "";
        this.availableState = new AvailableState(this);
        this.unvailableState = new UnavailableState(this);
        this.reservedState = new ReservedState(this);
        this.borrowedBy = borrowedBy;
        switch( currentState ) {
            case "available":
                this.currentState = this.availableState;
                break;
            case "unavailable":
                this.currentState = this.unvailableState;
                break;
            case "reserved":
                this.currentState = this.reservedState;
                break;
            default:
                this.currentState = this.unvailableState;
        }
        this.curState = currentState;
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

    public String getCurState() {
        return this.curState;
    }

    public void setState( String state ) {
        switch( state ) {
            case "available":
                setCurrentState(this.availableState);
                break;
            case "unavailable":
                setCurrentState(this.unvailableState);
                break;
            case "reserved":
                setCurrentState(this.reservedState);
                break;
            default:
                setCurrentState(this.unvailableState);
        }
    }

    public String getCategory() { return category; }

    public void pressBorrow(Long callerID ) {
        this.currentState.pressBorrow(callerID);
    }

    public void setCategory( String newCategory) { this.category = newCategory; }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", bookName='" + bookName + '\'' +
                ", category='" + category + '\'' +
                ", borrowedBy=" + borrowedBy +
                ", curState='" + curState + '\'' +
                ", authors=" + authors +
                ", availableState=" + availableState +
                ", unvailableState=" + unvailableState +
                ", reservedState=" + reservedState +
                ", currentState=" + currentState +
                '}';
    }
//    public String toString() {
//        return "Book{" +
//                "book id='" + id + '\'' +
//                ", book name='" + bookName + '\'' +
//                ", state=" + currentState.toString() + "}";
//    }

    public Long getBorrowedBy() {
        return borrowedBy;
    }

    public void setBorrowedBy(Long borrowedBy) {
        this.borrowedBy = borrowedBy;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }

    public BookState getAvailableState() {
        return availableState;
    }

    public void setAvailableState(BookState availableState) {
        this.availableState = availableState;
    }

    public BookState getUnvailableState() {
        return unvailableState;
    }

    public void setUnvailableState(BookState unvailableState) {
        this.unvailableState = unvailableState;
    }

    public BookState getReservedState() {
        return reservedState;
    }

    public void setReservedState(BookState reservedState) {
        this.reservedState = reservedState;
    }

    public BookState getCurrentState() {
        return currentState;
    }

    public void setCurrentState(BookState currentState) {
        this.currentState = currentState;
        this.curState = this.currentState.toString();
    }

    public void addAuthor(String author ) {
        this.authors.add( author );
    }
}
