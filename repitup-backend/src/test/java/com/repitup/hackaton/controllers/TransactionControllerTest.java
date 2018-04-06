package com.repitup.hackaton.controllers;

import com.repitup.hackaton.model.Transaction;
import com.repitup.hackaton.repository.TransactionRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.any;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 16:57
 */
@RunWith(SpringRunner.class)
@WebMvcTest(TransactionController.class)
public class TransactionControllerTest {


    @Autowired
    private MockMvc mvc;

    @MockBean
    private TransactionRepository transactionRepository;

    @Test
    public void transfer() throws Exception {

        Transaction transaction = new Transaction("message", BigDecimal.ONE, "amanda");
        List<Transaction> transactions = Arrays.asList(transaction);
        given(transactionRepository.findByRecipient("amanda")).willReturn(transactions);
        mvc.perform(get("/getTransactions.json").param("recipient", "amanda")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].recipient", is(transaction.getRecipient())));
    }




}