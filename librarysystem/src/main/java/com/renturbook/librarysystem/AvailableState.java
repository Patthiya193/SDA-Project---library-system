package com.renturbook.librarysystem;
import com.renturbook.librarysystem.model.Book;

public class AvailableState implements BookState {
    Book book;

    public AvailableState( Book book ) {
        this.book = book;
    }

    public void pressReserve(Long callerID, String callerName) {
        book.setReserverId(callerID);
        book.setReserverName(callerName);
        book.setCurrentState(book.getReservedState());

    }

    public String toString() {
        return "available";
    }
}
