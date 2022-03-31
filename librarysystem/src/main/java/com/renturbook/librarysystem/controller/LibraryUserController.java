package com.renturbook.librarysystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.renturbook.librarysystem.service.LibraryUserServiceImpl;
import com.renturbook.librarysystem.model.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/user")
public class LibraryUserController {

    private final LibraryUserServiceImpl userService;

    @Autowired
    public LibraryUserController(LibraryUserServiceImpl uService ){
        this.userService = uService;
    }

    @GetMapping
    public List<LibraryUser> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/username/")
    public LibraryUser getByUsername(@RequestParam String username) {
        return userService.getByUsername(username );
    }

    @GetMapping("/id/")
    @ResponseBody
    public LibraryUser getById( @RequestParam Long userId ) {
        return userService.getById(userId );
    }

    @GetMapping("/favid/")
    public List<Long> getFavIdById( @RequestParam Long userId ) {
        return userService.getFavIdById(userId);
    }

    @GetMapping("/favbook/")
    public List<Book> getFavBookById( @RequestParam Long userId) { return userService.getFavBookById(userId); }

    @GetMapping("/login/")
    public Optional<LibraryUser> login( @RequestBody String username, @RequestBody String password) {
        return userService.login(username, password);
    }

    @PostMapping
    public void registerNewUser(@RequestBody LibraryUser newUser) {
        userService.addNewUser(newUser);
    }

    @PostMapping("/test")
    public void addTestUser() {
        LibraryUser temp = new LibraryUser("test username", "encrypted password", "Fname", "Lname", List.of(1L,2L));
        userService.addNewUser( temp );
        LibraryUser temp2 = new LibraryUser("username2", "encrypted password2", "First2", "Last2",new ArrayList<>());
        temp2.addFavoriteBooks(2L);
        System.out.println("######################\n" + temp);
        System.out.println("######################\n" + temp2);

        userService.addNewUser( temp2);
    }

    @PatchMapping("/addfav/")
    public void addFavBookById( @RequestParam Long userId, @RequestParam Long bookId) {
        LibraryUser user = getById(userId);
        if ( user.getFavoriteBooks().contains(bookId) ) {
            return;
        }
        userService.addFavBookById( userId, bookId );
    }

    @PatchMapping("/removefav/")
    public void removeFavBookById( @RequestParam Long userId, @RequestParam Long bookId) {
        LibraryUser user = getById(userId);
        System.out.println("######################\n" +user.getFavoriteBooks());
        if ( user.getFavoriteBooks().contains(bookId) ) {
            userService.removeFavBookById( userId, bookId );
        }
    }
}