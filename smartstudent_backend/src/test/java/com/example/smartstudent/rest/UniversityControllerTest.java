package com.example.smartstudent.rest;

import static org.junit.jupiter.api.Assertions.*;

import com.example.smartstudent.dao.UniversityRepository;
import com.example.smartstudent.models.University;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class UniversityControllerTest {
    @Autowired
    private UniversityRepository universityDao;

    University university;

    @BeforeEach
    void beforeEach() {
        universityDao.deleteAll();
        university=universityDao.save(new University("Title", "Course", 2023, 4.2F));
    }

    @Test
    void addAnotherUniversityTest() {
        assertEquals(1,universityDao.count());
        assertEquals("Title",university.getTitle());
        assertEquals("Course", university.getCourse());
        assertEquals(2023, university.getYear());
        assertEquals(4.2F, university.getPassing_grade(), 0.0001);
    }

    @Test
    void deleteUniversityTest() {
        assertEquals(1,universityDao.count());
        universityDao.deleteById(university.getId());
        assertEquals(0,universityDao.count());
    }
}
