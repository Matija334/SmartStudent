package com.example.smartstudent.controllers;

import com.example.smartstudent.dao.StudentRepository;
import com.example.smartstudent.exceptions.ResourceNotFoundException;
import com.example.smartstudent.models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    private StudentRepository studentDao;

    @GetMapping
    public Iterable<Student> returnAllStudents() { return studentDao.findAll(); }

    @GetMapping("/{id}")
    public Optional<Student> returnStudentById(@PathVariable(name = "id") Long id) { return studentDao.findById(id);}

    @PostMapping
    public Student addStudent(@RequestBody Student student){
        return studentDao.save(student);
    }

    @PutMapping("/{id}")
    public Student updateStudentInfo(@PathVariable(name = "id") Long id, @RequestBody Student student){
        Student updatedStudentInfo = studentDao.findById(id).orElseThrow(() -> {
            return new ResourceNotFoundException("Student with id: " + id + " does not exist.");
        });

        updatedStudentInfo.setName(student.getName());
        updatedStudentInfo.setLast_name(student.getLast_name());
        updatedStudentInfo.setEmail(student.getEmail());
        updatedStudentInfo.setFinal_grade(student.getFinal_grade());

        return studentDao.save(updatedStudentInfo);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable(name = "id") Long id){
        studentDao.deleteById(id);
    }
}
