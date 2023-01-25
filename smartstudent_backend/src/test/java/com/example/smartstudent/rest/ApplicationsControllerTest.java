package com.example.smartstudent.rest;

import static org.junit.jupiter.api.Assertions.*;

import com.example.smartstudent.dao.ListOfApplicationsRepository;
import com.example.smartstudent.dao.StudentRepository;
import com.example.smartstudent.dao.UniversityRepository;
import com.example.smartstudent.models.ListOfApplications;
import com.example.smartstudent.models.Student;
import com.example.smartstudent.models.University;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class ApplicationsControllerTest {

    @Autowired
    private StudentRepository studentDao;
    @Autowired
    private UniversityRepository universityDao;
    @Autowired
    private ListOfApplicationsRepository applicationDao;

    Student student;
    University university;
    ListOfApplications application;

    Student testStudent = new Student("Name", "Last name", "Email", 4.5F);
    University testUniversity = new University("Title", "Course", 2023, 4.2F);

    @BeforeEach
    void beforeEach() {
        studentDao.deleteAll();
        student=studentDao.save(new Student("Name", "Last name", "Email", 4.5F));
        universityDao.deleteAll();
        university=universityDao.save(new University("Title", "Course", 2023, 4.2F));
        applicationDao.deleteAll();
        application=applicationDao.save(new ListOfApplications(student, university));
    }

    @Test
    void listOfApplicationsTest() {
        assertEquals(1,applicationDao.count());
        assertEquals(true, application.isPass());
    }


}
