package com.renturbook.librarysystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.renturbook.librarysystem.service.BookServiceImpl;
import com.renturbook.librarysystem.model.*;
import org.springframework.web.multipart.MultipartFile;

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

//    @GetMapping("/type/")
//    @ResponseBody
//    public List<Book> getBookByType( @RequestParam String type) {
//        List<Book> bookList = bookService.getByType(type);
//        for (Book b : bookList) {
//            b.generateState();
//        }
//        return bookList;
//    }

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

    @PatchMapping("/addgenre/")
    public void addGenre(@RequestParam Long bookId, @RequestParam String genre ){
        Book book = getBookById(bookId);
        if ( book.getGenre().contains(genre) ) {
            return;
        }
        bookService.removeGenreById( bookId, genre );
    }

    @GetMapping("/borrow/")
    @ResponseBody
    public Book borrowBook( @RequestParam Long bookId, @RequestParam Long callerId, @RequestParam String callerName) {
        Book tempBook = bookService.getById(bookId);
        tempBook.generateState();
        tempBook.pressReserve(callerId, callerName);
        bookService.saveBook(tempBook);
        return tempBook;
    }

//    @PostMapping
//    public void addBook(@RequestBody Book newBook) {
////        System.out.println(newBook.getCoverImage());
//        bookService.saveBook(newBook);
//    }
    @PostMapping
    public void addBook(@RequestBody Book newBook) {
    //        System.out.println(newBook.getCoverImage());

        bookService.saveBook(newBook);
    }

    @PostMapping("/test")
    public void addTestBook() {
        Book temp = new Book("isbn", "Test book", "this book so good",
                "available", 0L, "", List.of("ART", "CARTOON"),List.of("author1", "author2"));
        bookService.saveBook(temp);
        Book temp2 = new Book("isbn2", "??????????????????",
                "???????????????????????????\n" +
                        "???????????????????????????????????????\n" +
                        "???????????????????????????\n" +
                        "??????????????????????????????????????????\n" +
                        "\n" +
                        "?????????????????????????????????\n" +
                        "??????????????????????????????????????????\n" +
                        "???????????????????????????\n" +
                        "????????????????????????????????????????????????\n" +
                        "???????????????????????????????????????\n" +
                        "?????????????????????????????????\n" +
                        "?????????????????????????????????\n" +
                        "???????????????????????????\n"
                , "available", 0L, "", List.of("MAGAZINE"),List.of("yourness"));
        bookService.saveBook(temp2);
    }

    @DeleteMapping
    public void deleteBook(@RequestParam Long bookId) {
        bookService.deleteBook(bookId);
    }

    @PutMapping("/edit")
    public void updateBook(@RequestBody Book updatedBook) {
        bookService.updateBook(updatedBook);
    }
}