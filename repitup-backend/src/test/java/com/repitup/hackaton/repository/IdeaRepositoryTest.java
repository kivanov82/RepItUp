package com.repitup.hackaton.repository;

import com.repitup.hackaton.model.Idea;
import com.repitup.hackaton.model.Need;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashSet;

import static org.junit.Assert.*;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 21:36
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class IdeaRepositoryTest {

    @Autowired
    private IdeaRepository ideaRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testIdeaSave() {
        Idea idea = new Idea("description", "name" , new HashSet<Need>(), "assumption");
        entityManager.persist(idea);
        entityManager.flush();
        Idea one = ideaRepository.findOne(1L);
        assertEquals(one.getDescription(), idea.getDescription());
        assertEquals(one.getAssumption(), idea.getAssumption());
    }



}