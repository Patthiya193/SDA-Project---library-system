package com.renturbook.librarysystem.controller;

import com.renturbook.librarysystem.AvailableState;
import com.renturbook.librarysystem.ReservedState;
import com.renturbook.librarysystem.UnavailableState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.renturbook.librarysystem.service.BookServiceImpl;
import com.renturbook.librarysystem.model.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/book")
public class BookController {

    private final BookServiceImpl bookService;

    @Autowired
    public BookController(BookServiceImpl bService ){
        this.bookService = bService;
    }

    @GetMapping
    public List<Book> getBooks() {
        System.out.println("test api");
        return bookService.getAllBooks();
    }

    @GetMapping("/")
    @ResponseBody
    public Book getBook( @RequestParam Long bookID ) {
        Book book = bookService.getById(bookID);
        book.setAvailableState(new AvailableState(book));
        book.setUnvailableState(new UnavailableState(book));
        book.setReservedState(new ReservedState(book));
        book.setState(book.getCurState());
        System.out.println(book);
        return book;
    }

    @PostMapping("/borrow")
    @ResponseBody
    public Book borrowBook( @RequestParam Long bookID, @RequestParam Long callerID) {
        Book tempBook = bookService.getById(bookID);
        tempBook.setAvailableState(new AvailableState(tempBook));
        tempBook.setUnvailableState(new UnavailableState(tempBook));
        tempBook.setReservedState(new ReservedState(tempBook));
        tempBook.setState(tempBook.getCurState());
        System.out.println("########"+tempBook.getCurState());
        System.out.println(tempBook);
        tempBook.pressBorrow(callerID);
        bookService.saveBook(tempBook);
        System.out.println("########"+tempBook.getCurState());
        System.out.println(tempBook);
        return tempBook;
    }

    @PostMapping
    public void addBook(@RequestBody Book newBook) {
        bookService.saveBook(newBook);
    }

    @PostMapping("/test")
    public void addTestBook() {
        bookService.saveBook(new Book("test book","test category", "available", 0L,List.of("author1", "author2")));
    }
}