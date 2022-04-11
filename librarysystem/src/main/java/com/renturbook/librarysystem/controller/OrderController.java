package com.renturbook.librarysystem.controller;

import com.renturbook.librarysystem.service.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.renturbook.librarysystem.service.BookServiceImpl;
import com.renturbook.librarysystem.model.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/order")
public class OrderController {

    private final OrderServiceImpl orderService;

    @Autowired
    public OrderController(OrderServiceImpl oService ){
        this.orderService = oService;
    }

    @GetMapping
    public List<BorrowOrder> getOrders() {
        System.out.println("test api");
        List<BorrowOrder> orderList = orderService.getAllOrders();
        for ( BorrowOrder b : orderList ) {
            b.generateState();
        }
        return orderList;
    }


    @GetMapping("/id/")
    @ResponseBody
    public BorrowOrder getOrderById( @RequestParam Long bookId ) {
        BorrowOrder order = orderService.getById(bookId);
        order.generateState();
        return order;
    }

    @GetMapping("/borrower/")
    @ResponseBody
    public List<BorrowOrder> getOrdersByBorrower( @RequestParam Long bookId ) {
        List<BorrowOrder> orderList = orderService.getOrderByBorrower(bookId);
        for (BorrowOrder b : orderList ) {
            b.generateState();
        }
        return orderList;
    }

    @GetMapping("/return/")
    @ResponseBody
    public BorrowOrder returnBook( @RequestParam Long orderId, @RequestParam Long callerId) {
        BorrowOrder tempOrder = orderService.getById(orderId);
        tempOrder.generateState();
        tempOrder.pressBorrow(callerId);
        orderService.saveOrder(tempOrder);
        return tempOrder;
    }

    @PostMapping
    public void addOrder(@RequestBody BorrowOrder newOrder) {
        orderService.saveOrder(newOrder);
    }

    @PostMapping("/test")
    public void addTestBook() {
        BorrowOrder temp = new BorrowOrder(1L, 1L, "2017/11/06 12:11:58","borrowing");
        orderService.saveOrder(temp);
    }

}