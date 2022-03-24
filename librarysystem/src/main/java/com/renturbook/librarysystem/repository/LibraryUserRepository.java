package com.renturbook.librarysystem.repository;

import com.renturbook.librarysystem.model.LibraryUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface LibraryUserRepository
        extends JpaRepository<LibraryUser, String> {

    @Query("SELECT u FROM LibraryUser u WHERE u.username = ?1")
    Optional<LibraryUser> findLibraryUserByUsername(String username);
}

