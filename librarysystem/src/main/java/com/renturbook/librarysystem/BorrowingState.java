package com.renturbook.librarysystem;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import com.renturbook.librarysystem.model.BorrowOrder;

public class BorrowingState implements OrderState {
    BorrowOrder borrowOrder;

    public BorrowingState( BorrowOrder borrowOrder ) {
        this.borrowOrder = borrowOrder;
    }

    public void pressBorrow(Long callerID) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        if ( borrowOrder.getBorrowedBy() == callerID)
        {
            borrowOrder.setReturnDate(dtf.format(now));
            borrowOrder.setCurrentState(borrowOrder.getReturnedState());
        }
    }

    public String toString() {
        return "borrowing";
    }
}
