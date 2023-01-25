package com.example.smartstudent.rest;

import static org.junit.jupiter.api.Assertions.*;

import com.example.smartstudent.dao.StudentRepository;
import com.example.smartstudent.models.Student;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class StudentControllerTest {
    @Autowired
    private StudentRepository studentDao;

    Student student;

    @BeforeEach
    void beforeEach() {
        studentDao.deleteAll();
        student=studentDao.save(new Student("Name", "Last name", "Email", 4.5F));
    }

    @Test
    void addAnotherStudentTest() {
        assertEquals(1,studentDao.count());
        assertEquals("Name",student.getName());
        assertEquals("Last name", student.getLast_name());
        assertEquals("Email", student.getEmail());
        assertEquals(4.5F, student.getFinal_grade(), 0.0001);
    }

    @Test
    void deleteStudentTest() {
        assertEquals(1,studentDao.count());
        studentDao.deleteById(student.getId());
        assertEquals(0,studentDao.count());
    }
}
