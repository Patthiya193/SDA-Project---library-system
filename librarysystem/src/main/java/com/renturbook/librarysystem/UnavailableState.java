package com.renturbook.librarysystem;

import com.renturbook.librarysystem.model.Book;

public class UnavailableState implements BookState {

    Book book;
    public UnavailableState( Book book ) {
        this.book = book;
    }

    public void pressReserve(Long callerID, String callerName ) {
        return;
    }

    public String toString() {
        return "unavailable";
    }
}
