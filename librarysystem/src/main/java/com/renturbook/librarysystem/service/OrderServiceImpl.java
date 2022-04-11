package com.renturbook.librarysystem.service;

import com.renturbook.librarysystem.model.BorrowOrder;
import com.renturbook.librarysystem.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl {
    OrderRepository  orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<BorrowOrder> getAllOrders() {
        return orderRepository.findAll();
    }

    public BorrowOrder getById( Long id ) {
        return orderRepository.findOrderById(id);
    }

    public BorrowOrder saveOrder(BorrowOrder newOrder) {
        return orderRepository.save(newOrder);
    }

    public List<BorrowOrder> getOrderByBorrower( Long borrowerId) {
        return orderRepository.findOrdersByBorrower(borrowerId);
    }

}
