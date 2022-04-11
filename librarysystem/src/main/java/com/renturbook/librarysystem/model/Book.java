package com.renturbook.librarysystem.model;


import javax.persistence.*;
import java.sql.Blob;
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
    private Long reserverId;
    private String curState;
    private String description;
    private String reserverName;

    @Lob
    private Blob coverImage;

//    @Column(nullable = true, length = 64)
//    private String coverImage;



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

    public Book(String isbn, String bookName, String description, String currentState, Long reserverId, String reserverName, List<String> genre, List<String> authors) {
        this.isbn = isbn;
        this.bookName = bookName;
        this.authors = authors;
        this.description = description;
        this.genre = genre;
//        this.coverImage = "";
        this.availableState = new AvailableState(this);
        this.unavailableState = new UnavailableState(this);
        this.reservedState = new ReservedState(this);
        this.reserverId = reserverId;
        this.reserverName = reserverName;
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

    public String getReserverName() {
        return reserverName;
    }

    public void setReserverName(String reserverName) {
        this.reserverName = reserverName;
    }

    public void setState(String state ) {
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

    public void pressReserve(Long callerID, String callerName) {
        this.currentState.pressReserve(callerID, callerName);
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", bookName='" + bookName + '\'' +
                ", genre='" + genre + '\'' +
                ", borrowedBy=" + reserverId +
                ", curState='" + curState + '\'' +
                ", authors=" + authors +
                ", availableState=" + availableState +
                ", unavailableState=" + unavailableState +
                ", reservedState=" + reservedState +
                ", currentState=" + currentState +
                '}';
    }

    public Long getReserverId() {
        return reserverId;
    }

    public void setReserverId(Long borrowedBy) {
        this.reserverId = borrowedBy;
    }
//
//    public String getCoverImage() {
//        return coverImage;
//    }
//
//    public void setCoverImage(String coverImage) {
//        this.coverImage = coverImage;
//    }
    public void setCoverImage(Blob coverImage) {
        this.coverImage = coverImage;
    }
    public Blob getCoverImage() {
        return this.coverImage;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
