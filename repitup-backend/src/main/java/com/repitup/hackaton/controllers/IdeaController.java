package com.repitup.hackaton.controllers;

import com.repitup.hackaton.model.Idea;
import com.repitup.hackaton.model.Transaction;
import com.repitup.hackaton.repository.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 19:44
 */
@RestController
@RequestMapping("idea")
public class IdeaController {

    @Autowired
    private IdeaRepository ideaRepository;


    @RequestMapping(value = "/{idea}", method = RequestMethod.GET)
    public Idea getIdea(@PathVariable Idea idea) {
        return idea;
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public List<Idea> findAll() {
        return (List<Idea>) ideaRepository.findAll();
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void saveIdea(@RequestBody  Idea idea) {
        ideaRepository.save(idea);
    }


}
