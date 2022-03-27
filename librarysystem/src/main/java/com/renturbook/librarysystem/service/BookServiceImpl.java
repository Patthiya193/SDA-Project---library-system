package com.renturbook.librarysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.renturbook.librarysystem.repository.BookRepository;
import com.renturbook.librarysystem.model.Book;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl{

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

    public List<Book> getByName( String name ) { return bookRepository.findBookByName( name ); }

    public List<Book> getByIsbn( String isbn ) { return bookRepository.findBookByIsbn( isbn); }

    public List<Book> getByType( String type ) { return bookRepository.findBookByType( type ); }

    public List<Book> getByGenre( String genre) {
//        List<String> genreList = Arrays.asList(genres);
//        List<Book> outList = bookRepository.findBookByGenre(genreList.get(0));
//        for (String g : genreList.subList(1,genreList.size())) {
//            List<Book> temp = bookRepository.findBookByGenre(g);
//            for ( Book b : temp) {
//                if (!outList.contains(b)) {
//                    outList.add(b);
//                }
//            }
//        }
        return bookRepository.findBookByGenre(genre);
    }

    public void removeGenreById( Long bookId, String genre ) {
        Book book = getById( bookId );
        book.removeGenre(genre);
        bookRepository.save(book);
    }

    public void addGenreById( Long bookId, String genre) {
        Book book = getById( bookId );
        book.addGenre(genre);
        bookRepository.save(book);
    }
}