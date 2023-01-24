package com.example.smartstudent.dao;

import com.example.smartstudent.models.University;
import org.springframework.data.repository.CrudRepository;

public interface UniversityRepository extends CrudRepository<University, Long> {
}
