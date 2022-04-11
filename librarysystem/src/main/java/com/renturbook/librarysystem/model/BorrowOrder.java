package com.renturbook.librarysystem.model;

import com.renturbook.librarysystem.*;

import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table
public class BorrowOrder {
    @Id
    @SequenceGenerator(
            name = "order_sequence",
            sequenceName = "order_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_sequence"
    )
    private Long id;
    private Long bookId;
    private String bookName;
    private Long borrowedBy;
    private String borrowDate;
    private String returnDate;
    private String curState;
    private String borrowerUsername;

    @Transient
    private OrderState borrowingState;
    @Transient
    private OrderState returnedState;
    @Transient
    private OrderState currentState;
    public BorrowOrder() {

    }

    public BorrowOrder(Long bookId, String bookName, Long borrowerId, String borrowerUsername, String borrowDate, String curState) {
        this.bookId = bookId;
        this.borrowedBy = borrowerId;
        this.bookName  = bookName;
        this.borrowDate = borrowDate;
        this.curState = curState;
        this.returnDate = "";
        this.borrowerUsername = borrowerUsername;
        this.borrowingState = new BorrowingState(this);
        this.returnedState = new ReturnedState(this);
        switch (curState) {
            case "returned":
                this.currentState = this.returnedState;
                break;
            default:
                this.currentState = this.borrowingState;
        }
    }

    public String getBorrowerUsername() {
        return borrowerUsername;
    }

    public void setBorrowerUsername(String borrowerUsername) {
        this.borrowerUsername = borrowerUsername;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public Long getBorrowedBy() {
        return borrowedBy;
    }

    public void setBorrowedBy(Long borrowedBy) {
        this.borrowedBy = borrowedBy;
    }

    public String getBorrowDate() {
        return borrowDate;
    }

    public void setBorrowDate(String borrowDate) {
        this.borrowDate = borrowDate;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(String returnDate) {
        this.returnDate = returnDate;
    }

    public String getCurState() {
        return curState;
    }

    public void setCurState(String curState) {
        this.curState = curState;
    }

    public OrderState getBorrowingState() {
        return borrowingState;
    }

    public void setBorrowingState(OrderState borrowingState) {
        this.borrowingState = borrowingState;
    }

    public OrderState getReturnedState() {
        return returnedState;
    }

    public void setReturnedState(OrderState returnedState) {
        this.returnedState = returnedState;
    }

    public OrderState getCurrentState() {
        return currentState;
    }

    public void setCurrentState(OrderState currentState) {
        this.currentState = currentState;
        this.curState = this.currentState.toString();
    }

    public void setState(String state ) {
        switch (state) {
            case "returned":
                this.currentState = this.returnedState;
                break;
            default:
                this.currentState = this.borrowingState;
        }
    }
    public void pressBorrow(Long callerID ) {
        this.currentState.pressBorrow(callerID);
    }

    @Override
    public String toString() {
        return "BorrowOrder{" +
                "id=" + id +
                ", bookId=" + bookId +
                ", borrowedBy=" + borrowedBy +
                ", borrowDate='" + borrowDate + '\'' +
                ", returnDate='" + returnDate + '\'' +
                ", curState='" + curState + '\'' +
                '}';
    }

    public void generateState() {
        this.borrowingState = new BorrowingState(this);
        this.returnedState = new ReturnedState(this);
        this.setState(curState);
    }
}
