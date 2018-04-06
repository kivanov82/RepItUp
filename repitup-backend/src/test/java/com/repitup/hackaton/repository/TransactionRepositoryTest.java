package com.repitup.hackaton.repository;

import com.repitup.hackaton.model.Transaction;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 16:44
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class TransactionRepositoryTest {

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testFindByRecipient() throws Exception {
        Transaction transaction = new Transaction("message", new BigDecimal(10), "amanda");
        entityManager.persist(transaction);
        entityManager.flush();
        List<Transaction> transactions = transactionRepository.findByRecipient("amanda");
        assertEquals(transaction.getMessage(), transactions.get(0).getMessage());


    }
}