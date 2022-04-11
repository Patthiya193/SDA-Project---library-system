package com.renturbook.librarysystem;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import com.renturbook.librarysystem.model.BorrowOrder;

public class ReturnedState implements OrderState {
    BorrowOrder borrowOrder;

    public ReturnedState( BorrowOrder borrowOrder ) {
        this.borrowOrder = borrowOrder;
    }

    public void pressBorrow(Long callerID) {
    }

    public String toString() {
        return "returned";
    }
}
