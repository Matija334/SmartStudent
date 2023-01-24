package com.example.smartstudent.controllers;

import com.example.smartstudent.dao.UniversityRepository;
import com.example.smartstudent.exceptions.ResourceNotFoundException;
import com.example.smartstudent.models.University;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/universities")
public class UniversityController {
    @Autowired
    private UniversityRepository universityDao;

    @GetMapping
    public Iterable<University> returnAllUniversities() { return universityDao.findAll(); }

    @GetMapping("/{id}")
    public Optional<University> returnUniversityById(@PathVariable(name = "id") Long id) { return universityDao.findById(id);}

    @PostMapping
    public University addUniversity(@RequestBody University university){
        return universityDao.save(university);
    }

    @PutMapping("/{id}")
    public University updateUniversityInfo(@PathVariable(name = "id") Long id, @RequestBody University university){
        University updatedUniversityInfo = universityDao.findById(id).orElseThrow(() -> {
            return new ResourceNotFoundException("University with id: " + id + " does not exist.");
        });

        updatedUniversityInfo.setTitle(university.getTitle());
        updatedUniversityInfo.setCourse(university.getCourse());
        updatedUniversityInfo.setYear(university.getYear());
        updatedUniversityInfo.setPassing_grade(university.getPassing_grade());

        return universityDao.save(updatedUniversityInfo);
    }

    @DeleteMapping("/{id}")
    public void deleteUniversity(@PathVariable(name = "id") Long id){
        universityDao.deleteById(id);
    }
}
