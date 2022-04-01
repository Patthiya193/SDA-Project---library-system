package com.renturbook.librarysystem.service;

import com.renturbook.librarysystem.model.Book;
import com.renturbook.librarysystem.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.renturbook.librarysystem.repository.LibraryUserRepository;
import com.renturbook.librarysystem.model.LibraryUser;
import com.renturbook.librarysystem.PasswordUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class LibraryUserServiceImpl {

    LibraryUserRepository userRepository;
    BookRepository bookRepository;

    @Autowired
    public LibraryUserServiceImpl(LibraryUserRepository userRepository, BookRepository bookRepository) {
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }

    public List<LibraryUser> getUsers() {
        List<LibraryUser> temp = userRepository.findAll();
        System.out.println("****************\n\n" + temp);
        return temp;
    }

    public void addNewUser(LibraryUser newUser) {
        Optional<LibraryUser> userByUsername = userRepository.findLibraryUserByUsername(newUser.getUsername());
        if ( userByUsername.isPresent()) {
            throw new IllegalStateException("Existed username");
        }
        newUser.setPassword(PasswordUtils.generateSecurePassword(newUser.getPassword(),PasswordUtils.getSalt(30)));
        userRepository.save(newUser);
        System.out.println(newUser);
    }

    public LibraryUser getById(Long id ) {
        return userRepository.findLibraryUserById( id );
    }

    public LibraryUser getByUsername(String username ) {
        return userRepository.findLibraryUserByUsername(username).get();
    }

    public List<Long> getFavIdById( Long id ) {
        return userRepository.findFavoriteBooksIdById(id);
    }

    public void addFavBookById( Long userId, Long bookId ) {
        LibraryUser user = getById(userId);
        user.addFavoriteBooks(bookId);
        userRepository.save(user);
    }

    public void removeFavBookById( Long userId, Long bookId) {
        LibraryUser user = getById(userId);
        user.removeFavoriteBooks(bookId);
        userRepository.save(user);
    }

    public List<Book> getFavBookById( Long id ) {
        List<Long> bookIds = getFavIdById( id );
        List<Book> bookList = new ArrayList<Book>();
        for ( Long bid : bookIds ) {
            bookList.add(bookRepository.findBookById(bid));
        }
        return bookList;
    }

    public Optional<LibraryUser> login( String username, String password) {
        Optional<LibraryUser> user = userRepository.findLibraryUserByUsername(username);
        LibraryUser libUser = user.get();
        if (PasswordUtils.verifyUserPassword(password, libUser.getPassword(), PasswordUtils.getSalt(30))) {
            return user;
        }
        else {
            return Optional.empty();
        }
    }
}