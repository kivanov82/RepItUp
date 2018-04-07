package com.repitup.hackaton.model;

import javafx.scene.chart.PieChart;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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

    @OneToMany(cascade = CascadeType.ALL)
    Set<Need> needs = new HashSet<>();

    //Hiberante
    protected Idea() {

    }

    public Idea(String description, Set<Need> needs) {
        this.description = description;
        this.needs = needs;
    }

    public String getDescription() {
        return description;
    }

    public Set<Need> getNeeds() {
        return needs;
    }
}
