package com.repitup.hackaton.controllers;

import java.util.List;

import com.repitup.hackaton.model.Idea;
import com.repitup.hackaton.repository.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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


    @RequestMapping(value = "/get.json", method = RequestMethod.GET)
    public Idea getIdea(@RequestParam Idea idea) {
        return idea;
    }

    @RequestMapping(value = "/getAll.json", method = RequestMethod.GET)
    public List<Idea> findAll() {
        return (List<Idea>) ideaRepository.findAll();
    }

    @RequestMapping(value = "/save.json", method = RequestMethod.POST)
    public void saveIdea(@RequestParam String description) {
        Idea idea = new Idea(description);
        ideaRepository.save(idea);
    }


}
