package com.repitup.hackaton.model;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 19:45
 */
@Entity
@Table(name = "idea")
public class Idea extends DataBaseObject {

    private String description;

    private String name;

    private String assumption;

    @OneToMany(cascade = CascadeType.ALL)
    Set<Need> needs = new HashSet<>();

    public Idea(String description, String name, String assumption, Set<Need> needs) {
        this.description = description;
        this.name = name;
        this.assumption = assumption;
        this.needs = needs;
    }

    //Hiberante
    protected Idea() {

    }

    public Idea(String description, String name, Set<Need> needs) {
        this.description = description;
        this.name = name;
        this.needs = needs;
    }

    public String getDescription() {
        return description;
    }

    public Set<Need> getNeeds() {
        return needs;
    }

    public String getName() {
        return name;
    }

    public String getAssumption() {
        return assumption;
    }
}
