package com.example.smartstudent.dao;

import com.example.smartstudent.models.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Long> {
}
