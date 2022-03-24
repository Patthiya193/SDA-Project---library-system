package com.renturbook.librarysystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.renturbook.librarysystem.service.BookService;
import com.renturbook.librarysystem.model.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/book")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController( BookService bService ){
        this.bookService = bService;
    }

    @GetMapping
    public List<Book> getBooks() {
        return bookService.getUsers();
    }

    @PostMapping
    public void addBook(@RequestBody Book newBook) {
        bookService.addBook(newBook);
    }
}