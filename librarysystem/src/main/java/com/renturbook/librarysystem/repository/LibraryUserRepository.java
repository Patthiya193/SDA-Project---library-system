package com.renturbook.librarysystem.repository;

import com.renturbook.librarysystem.model.LibraryUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LibraryUserRepository
        extends JpaRepository<LibraryUser, String> {

    @Query("SELECT u FROM LibraryUser u WHERE u.username = ?1")
    Optional<LibraryUser> findLibraryUserByUsername(String username);

    @Query("SELECT u FROM LibraryUser u WHERE u.id = :id")
    LibraryUser findLibraryUserById( Long id );

    @Query("SELECT fav FROM LibraryUser u JOIN u.favoriteBooks fav WHERE u.id = :id")
    List<Long> findFavoriteBooksIdById(Long id );

}

