package com.renturbook.librarysystem;
import com.renturbook.librarysystem.model.BorrowOrder;

public class ReturnedState implements OrderState {
    BorrowOrder borrowOrder;

    public ReturnedState( BorrowOrder borrowOrder ) {
        this.borrowOrder = borrowOrder;
    }

    public void pressReturnBook() {
    }

    public String toString() {
        return "returned";
    }
}
