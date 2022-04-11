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
    private final BookServiceImpl bookService;

    @Autowired
    public OrderController(OrderServiceImpl oService, BookServiceImpl bookService ){
        this.bookService = bookService;
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
        Book temp = bookService.getById(tempOrder.getBookId());
        temp.generateState();
        temp.setCurrentState(temp.getAvailableState());
        tempOrder.pressBorrow(callerId);
        orderService.saveOrder(tempOrder);
        return tempOrder;
    }

    @PostMapping
    public void addOrder(@RequestBody BorrowOrder newOrder) {
        Book temp = bookService.getById(newOrder.getBookId());
        temp.setReserverId(0L);
        temp.generateState();
        temp.setCurrentState(temp.getUnavailableState());
        bookService.saveBook(temp);
        orderService.saveOrder(newOrder);
    }

    @PostMapping("/test")
    public void addTestBook() {
        BorrowOrder temp = new BorrowOrder(1L, "Test book", 1L, "username", "2017/11/06 12:11:58","borrowing");
        Book tempBook = bookService.getById(temp.getBookId());
        tempBook.setReserverId(0L);
        tempBook.generateState();
        tempBook.setCurrentState(tempBook.getUnavailableState());
        bookService.saveBook(tempBook);
        orderService.saveOrder(temp);
    }

}