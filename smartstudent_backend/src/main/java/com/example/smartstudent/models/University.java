package com.example.smartstudent.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class University {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "university", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    Set<ListOfApplications> applications;

    private String title;

    private String course;

    private int year;

    private float passing_grade;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public float getPassing_grade() {
        return passing_grade;
    }

    public void setPassing_grade(float passing_grade) {
        this.passing_grade = passing_grade;
    }
}
