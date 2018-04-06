package com.repitup.hackaton.controllers;

import com.repitup.hackaton.model.Transaction;
import com.repitup.hackaton.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * Date: 17-Feb-18
 * Time: 18:07
 */

@RestController
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;



    @RequestMapping(value = "/transaction.json", method = RequestMethod.GET)
    void transfer(@RequestParam String recipient, @RequestParam BigDecimal amount, @RequestParam String message) {
        Transaction transaction = new Transaction(message, amount, recipient);
        transactionRepository.save(transaction);
    }

    @RequestMapping(value = "/getTransactions.json", method = RequestMethod.GET)
    List<Transaction> getTransactions(@RequestParam String recipient) {
        return transactionRepository.findByRecipient(recipient);
    }
}
