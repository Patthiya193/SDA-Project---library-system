package com.renturbook.librarysystem;

import com.renturbook.librarysystem.model.Book;

public class ReservedState implements BookState {
    Book book;

    public ReservedState( Book book ) {
        this.book = book;
    }

    public void pressReserve(Long callerID, String callerName) {
        if (callerID == book.getReserverId()){
            book.setCurrentState(book.getAvailableState());
            book.setReserverId(0L);
        }

    }

    public String toString() {
        return "reserved";
    }
}
