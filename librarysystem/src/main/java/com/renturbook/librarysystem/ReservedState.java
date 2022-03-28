package com.renturbook.librarysystem;

import com.renturbook.librarysystem.model.Book;

public class ReservedState implements BookState {
    Book book;

    public ReservedState( Book book ) {
        this.book = book;
    }

    public void pressBorrow(Long callerID) {
        if (callerID == book.getBorrowedBy()){
            book.setCurrentState(book.getAvailableState());
            book.setBorrowedBy(0L);
        }

    }

    public String toString() {
        return "reserved";
    }
}
