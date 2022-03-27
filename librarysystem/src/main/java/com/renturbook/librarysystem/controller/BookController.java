package com.renturbook.librarysystem.controller;

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
        List<Book> bookList = bookService.getAllBooks();
        for ( Book b : bookList ) {
            b.generateState();
        }
        return bookList;
    }


    @GetMapping("/id/")
    @ResponseBody
    public Book getBookById( @RequestParam Long bookId ) {
        Book book = bookService.getById(bookId);
        book.generateState();
        System.out.println(book);
        return book;
    }

    @GetMapping("/name/")
    @ResponseBody
    public List<Book> getBookByName( @RequestParam String bookName) {
        List<Book> bookList = bookService.getByName(bookName);
        for (Book b : bookList) {
            b.generateState();
        }
        return bookList;    }

    @GetMapping("/isbn/")
    @ResponseBody
    public List<Book> getBookByIsbn( @RequestParam String isbn) {
        List<Book> bookList = bookService.getByIsbn(isbn);
        for (Book b : bookList) {
            b.generateState();
        }
        return bookList;
    }

    @GetMapping("/type/")
    @ResponseBody
    public List<Book> getBookByType( @RequestParam String type) {
        List<Book> bookList = bookService.getByType(type);
        for (Book b : bookList) {
            b.generateState();
        }
        return bookList;    }

//    @GetMapping("/genre/")
//    public List<Book> getBookByGenre( @RequestParam String genre ) {
//        List<Book> bookList = bookService.getByGenre(genre);
//        for (Book b : bookList) {
//            b.generateState();
//        }
//        return bookList;
//    }
//
    @GetMapping("/genre/")
    public List<Book> getBookByGenre( @RequestParam String genre ) {
        List<Book> bookList = bookService.getByGenre(genre);
        for (Book b : bookList) {
            b.generateState();
        }
        return bookList;
    }

    @PatchMapping("/removegenre/")
    public void removeGenre(@RequestParam Long bookId, @RequestParam String genre ){
        Book book = getBookById(bookId);
        if ( book.getGenre().contains(genre) ) {
            bookService.removeGenreById( bookId, genre );
        }
    }
//

    @PatchMapping("/borrow")
    @ResponseBody
    public Book borrowBook( @RequestParam Long bookId, @RequestParam Long callerID) {
        Book tempBook = bookService.getById(bookId);
        tempBook.generateState();
//        System.out.println("########"+tempBook.getCurState());
//        System.out.println(tempBook);
        tempBook.pressBorrow(callerID);
        bookService.saveBook(tempBook);
//        System.out.println("########"+tempBook.getCurState());
//        System.out.println(tempBook);
        return tempBook;
    }

    @PostMapping
    public void addBook(@RequestBody Book newBook) {
        bookService.saveBook(newBook);
    }

    @PostMapping("/test")
    public void addTestBook() {
        bookService.saveBook(new Book("isbn", "test book","NOVEL", "available", 0L, List.of("DRAMA", "SCI-FI"),List.of("author1", "author2")));
        bookService.saveBook(new Book("isbn2", "book2","MAGAZINE", "available", 0L, List.of("SCI-FI"),List.of("author3")));
    }


}