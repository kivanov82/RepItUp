package com.repitup.hackaton.model;

import javax.persistence.*;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 19:46
 */
@MappedSuperclass
public class DataBaseObject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    public long getId() {
        return id;
    }
}
