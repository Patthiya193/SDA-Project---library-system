package com.renturbook.librarysystem.service;

import com.renturbook.librarysystem.model.Book;
import java.util.List;

public interface BookService {
    public Book saveBook (Book book);
    public List<Book> getAllBooks();
}
