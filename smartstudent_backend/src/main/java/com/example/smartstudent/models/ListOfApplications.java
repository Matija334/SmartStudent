package com.example.smartstudent.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
public class ListOfApplications {

    public ListOfApplications(){}

    public ListOfApplications(Student student, University university){
        setStudent(student);
        setUniversity(university);
        if(student.getFinal_grade() >= university.getPassing_grade()){
            pass = true;
        }
        setPass(pass);
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_student")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    Student student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_university")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    University university;

    private boolean pass = false;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public boolean isPass() {
        return pass;
    }

    public void setPass(boolean pass) {
        this.pass = pass;
    }
}
