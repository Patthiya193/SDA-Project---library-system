package com.renturbook.librarysystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.renturbook.librarysystem.repository.LibraryUserRepository;
import com.renturbook.librarysystem.model.LibraryUser;
import java.util.List;
import java.util.Optional;

@Component
public class LibraryUserService {

    LibraryUserRepository userRepository;

    @Autowired
    public LibraryUserService(LibraryUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<LibraryUser> getUsers() {
        return List.of(
                new LibraryUser("test username", "test@email.com", "test name")
        );
    }

    public void addNewUser(LibraryUser newUser) {
        Optional<LibraryUser> userByUsername = userRepository.findLibraryUserByUsername(newUser.getUsername());
        if ( userByUsername.isPresent()) {
            throw new IllegalStateException("Existed username");
        }
        userRepository.save(newUser);
        System.out.println(newUser);
    }
}