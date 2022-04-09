package com.renturbook.librarysystem.repository;

import com.renturbook.librarysystem.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BookRepository
        extends JpaRepository<Book, String> {

    @Query("SELECT b FROM Book b WHERE b.bookName LIKE %:bookName%")
    List<Book> findBookByName(String bookName);

    @Query("SELECT b FROM Book b WHERE b.id = :id")
    Book findBookById(Long id);

    @Query("SELECT b FROM Book b WHERE b.isbn = :isbn")
    List<Book> findBookByIsbn(String isbn);

//    @Query("SELECT b FROM Book b WHERE b.bookType = :type")
//    List<Book> findBookByType( String type);

    @Query("SELECT b FROM Book b JOIN b.genre gen WHERE :genre = gen")
    List<Book> findBookByGenre( String genre);


}

