package com.repitup.hackaton.controllers;

import java.util.List;

import com.repitup.hackaton.model.Idea;
import com.repitup.hackaton.repository.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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


    @RequestMapping(value = "/{idea}", method = RequestMethod.GET)
    public Idea getIdea(@PathVariable Idea idea) {
        return idea;
    }

    @RequestMapping(value = "/getLast", method = RequestMethod.GET)
    public Idea findLast() {
        List<Idea> ideas = (List<Idea>)ideaRepository.findAll();
        return ideas.get(ideas.size() - 1);
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
