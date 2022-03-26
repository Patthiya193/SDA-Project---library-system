package com.renturbook.librarysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.renturbook.librarysystem.repository.BookRepository;
import com.renturbook.librarysystem.model.Book;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService{

    BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book saveBook(Book newBook) {
        return bookRepository.save(newBook);
    }

    public Book getById( Long id ) {
        return bookRepository.findBookById(id);
    }
}