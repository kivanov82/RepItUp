package com.repitup.hackaton.model;

import javafx.scene.chart.PieChart;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created with IntelliJ IDEA.
 * Date: 06-Apr-18
 * Time: 19:45
 */
@Entity
@Table(name = "idea")
public class Idea extends DataBaseObject {

    private String description;

    //Hiberante
    protected Idea() {

    }

    public Idea(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
