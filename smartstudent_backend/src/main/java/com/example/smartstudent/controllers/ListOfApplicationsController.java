package com.example.smartstudent.controllers;

import com.example.smartstudent.dao.ListOfApplicationsRepository;
import com.example.smartstudent.dao.StudentRepository;
import com.example.smartstudent.dao.UniversityRepository;
import com.example.smartstudent.models.ListOfApplications;
import com.example.smartstudent.models.Student;
import com.example.smartstudent.models.University;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/list")
public class ListOfApplicationsController {
    @Autowired
    private ListOfApplicationsRepository listOfApplicationsDao;
    @Autowired
    private StudentRepository studentDao;
    @Autowired
    private UniversityRepository universityDao;

    @GetMapping
    public Iterable<ListOfApplications> returnAllApplications() { return listOfApplicationsDao.findAll(); }

    @GetMapping("/{id}")
    public Optional<ListOfApplications> returnApplicationById(@PathVariable(name = "id") Long id) { return listOfApplicationsDao.findById(id);}

    @PostMapping("/{id_student}/{id_university}")
    public ListOfApplications addApplication(@RequestBody ListOfApplications listOfApplications, @PathVariable(name = "id_student") Long id_student, @PathVariable(name = "id_university") Long id_university){
        Optional<Student> student = studentDao.findById(id_student);
        Optional<University> university = universityDao.findById(id_university);

        if(student.isPresent() && university.isPresent()){
            if(student.get().getFinal_grade() >= university.get().getPassing_grade()){
                listOfApplications.setPass(true);
            }
            listOfApplications.setStudent(student.get());
            listOfApplications.setUniversity(university.get());
        }
        return listOfApplicationsDao.save(listOfApplications);
    }

    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable(name = "id") Long id){
        listOfApplicationsDao.deleteById(id);
    }
}
