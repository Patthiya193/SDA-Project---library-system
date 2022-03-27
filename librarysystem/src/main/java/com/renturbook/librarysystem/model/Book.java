package com.renturbook.librarysystem.model;


import javax.persistence.*;
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
    private String isbn;
    private String bookName;
    private String bookType;
    private Long borrowedBy;
    private String curState;

    @Column(nullable = true, length = 64)
    private String coverImage;

    @ElementCollection
    private List<String> authors;

    @ElementCollection
    private List<String> genre;

    @Transient
    private BookState availableState;
    @Transient
    private BookState unavailableState;
    @Transient
    private BookState reservedState;
    @Transient
    private BookState currentState;
    public Book() {

    }

    public Book(String isbn,String bookName, String bookType, String currentState, Long borrowedBy, List<String> genre, List<String> authors) {
        this.isbn = isbn;
        this.bookName = bookName;
        this.authors = authors;
        this.bookType = bookType;
        this.genre = genre;
        this.coverImage = "";
        this.availableState = new AvailableState(this);
        this.unavailableState = new UnavailableState(this);
        this.reservedState = new ReservedState(this);
        this.borrowedBy = borrowedBy;
        switch( currentState ) {
            case "available":
                this.currentState = this.availableState;
                break;
            case "reserved":
                this.currentState = this.reservedState;
                break;
            default:
                this.currentState = this.unavailableState;
        }
        this.curState = currentState;
    }

    public Long getId() {
        return id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public List<String> getGenre() {
        return genre;
    }

    public void setGenre(List<String> genre) {
        this.genre = genre;
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
                setCurrentState(this.unavailableState);
                break;
            case "reserved":
                setCurrentState(this.reservedState);
                break;
            default:
                setCurrentState(this.unavailableState);
        }
    }

    public String getBookType() { return bookType; }

    public void pressBorrow(Long callerID ) {
        this.currentState.pressBorrow(callerID);
    }

    public void setBookType( String newBookType) { this.bookType = newBookType; }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", bookName='" + bookName + '\'' +
                ", category='" + bookType + '\'' +
                ", genre='" + genre + '\'' +
                ", borrowedBy=" + borrowedBy +
                ", curState='" + curState + '\'' +
                ", authors=" + authors +
                ", availableState=" + availableState +
                ", unvailableState=" + unavailableState +
                ", reservedState=" + reservedState +
                ", currentState=" + currentState +
                '}';
    }

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

    public BookState getUnavailableState() {
        return unavailableState;
    }

    public void setUnavailableState(BookState unavailableState) {
        this.unavailableState = unavailableState;
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

    public void generateState() {
        this.availableState = new AvailableState(this);
        this.unavailableState = new UnavailableState(this);
        this.reservedState = new ReservedState( this );
        this.setState(curState);
    }
    public void addAuthor(String author ) {
        this.authors.add( author );
    }

    public void addGenre(String genre) {
        this.genre.add( genre);
    }

    public void removeGenre( String genre) { this.genre.remove(genre);}
}
