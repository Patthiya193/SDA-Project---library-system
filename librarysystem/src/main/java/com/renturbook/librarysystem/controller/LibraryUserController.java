package com.renturbook.librarysystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.renturbook.librarysystem.service.LibraryUserService;
import com.renturbook.librarysystem.model.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/user")
public class LibraryUserController {

    private final LibraryUserService userService;

    @Autowired
    public LibraryUserController( LibraryUserService uService ){
        this.userService = uService;
    }

    @GetMapping
    public List<LibraryUser> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public void registerNewUser(@RequestBody LibraryUser newUser) {
        userService.addNewUser(newUser);
    }
}