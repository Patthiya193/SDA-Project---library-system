package com.renturbook.librarysystem.repository;

import com.renturbook.librarysystem.model.Book;
import com.renturbook.librarysystem.model.BorrowOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface OrderRepository
        extends JpaRepository<BorrowOrder, Long> {


    @Query("SELECT b FROM BorrowOrder b WHERE b.id = :id")
    BorrowOrder findOrderById(Long id);

    @Query("SELECT b FROM BorrowOrder b  WHERE :borrowedBy = b.borrowedBy")
    List<BorrowOrder> findOrdersByBorrower( Long borrowedBy);


}

