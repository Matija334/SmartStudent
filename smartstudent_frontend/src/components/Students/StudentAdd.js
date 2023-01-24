import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [final_grade, setFinalGrade] = useState("");
  let navigate = useNavigate();

  const addStudent = () => {
    api
      .post(`http://127.0.0.1:8180/api/v1/students`, {
        name: name,
        last_name: last_name,
        email: email,
        final_grade: final_grade,
      })
      .then((result) => console.log(result.data));
    setName("");
    setLast_name("");
    setEmail("");
    setFinalGrade("");
    navigate("/students");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <TextField
        label="Last name"
        variant="outlined"
        value={last_name}
        onChange={(event) => setLast_name(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <TextField
        label="E-mail"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <TextField
        label="Final grade"
        variant="outlined"
        value={final_grade}
        onChange={(event) => setFinalGrade(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <Button
        variant="contained"
        color="success"
        onClick={addStudent}
        style={{ margin: "1rem" }}
      >
        Add
      </Button>
      <Button
        variant="contained"
        style={{ margin: "1rem" }}
        onClick={() => navigate("/students")}
      >
        Back
      </Button>
    </div>
  );
};
export default AddStudent;
