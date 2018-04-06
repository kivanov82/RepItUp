package com.repitup.hackaton.repository;

import com.repitup.hackaton.model.Idea;
import com.repitup.hackaton.model.Transaction;
import org.springframework.data.repository.CrudRepository;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 20:25
 */
public interface IdeaRepository extends CrudRepository<Idea, Long> {
}
