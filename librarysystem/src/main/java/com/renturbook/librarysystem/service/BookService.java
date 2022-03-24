package com.renturbook.librarysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.renturbook.librarysystem.repository.BookRepository;
import com.renturbook.librarysystem.model.Book;
import java.util.List;
import java.util.Optional;

@Component
public class BookService {

    BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getUsers() {
        return List.of(
                new Book("test bookName", List.of("author1", "author2"))
        );
    }

    public void addBook(Book newBook) {
        bookRepository.save(newBook);
        System.out.println(newBook);
    }
}