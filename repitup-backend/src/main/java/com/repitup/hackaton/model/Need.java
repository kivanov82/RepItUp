package com.repitup.hackaton.model;

import javafx.scene.chart.PieChart;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created with IntelliJ IDEA.
 * Date: 07-Apr-18
 * Time: 13:35
 */
@Entity
@Table(name = "need")
public class Need extends DataBaseObject {

    private String text;

    //Hibenrate
    protected Need() {

    }

    public Need(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }
}
