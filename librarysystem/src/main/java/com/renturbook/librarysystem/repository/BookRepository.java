package com.renturbook.librarysystem.repository;

import com.renturbook.librarysystem.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface BookRepository
        extends JpaRepository<Book, String> {

    @Query("SELECT b FROM Book b WHERE b.bookName LIKE %:bookName%")
    Optional<Book> findBookByName(String bookName);
}

