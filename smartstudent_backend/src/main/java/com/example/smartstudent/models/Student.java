package com.example.smartstudent.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    Set<ListOfApplications> applications;
    private String name;

    private String last_name;

    private String email;

    private float final_grade;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public float getFinal_grade() {
        return final_grade;
    }

    public void setFinal_grade(float final_grade) {
        this.final_grade = final_grade;
    }
}
