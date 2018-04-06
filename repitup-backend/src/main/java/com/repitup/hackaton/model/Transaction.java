package com.repitup.hackaton.model;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created with IntelliJ IDEA.
 * Date: 17-Feb-18
 * Time: 16:41
 */
@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    String message;

    String recipient;

    BigDecimal amount;

    //Hibernate
    protected Transaction() {

    }

    public Transaction(String message, BigDecimal amount, String recipient) {
        this.recipient = recipient;
        this.message = message;
        this.amount = amount;
    }

    public String getMessage() {
        return message;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public String getRecipient() {
        return recipient;
    }
}
