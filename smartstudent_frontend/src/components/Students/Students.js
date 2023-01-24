import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import StudentsTable from "./StudentsTable";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudents = () => {
      api.get("http://127.0.0.1:8180/api/v1/students").then((result) => {
        setStudents(result.data);
      });
    };
    getStudents();
  }, []);

  return (
    <>
      <h1>Students</h1>
      <StudentsTable students={students} />
      <Link style={{ textDecoration: "none" }} to="/students/add">
        <Button style={{ margin: "2rem" }} color="success" variant="contained">
          Add student
        </Button>
      </Link>
    </>
  );
};
export default Students;
