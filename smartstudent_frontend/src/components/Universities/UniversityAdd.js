import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const AddUniversity = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [passing_grade, setPassing_grade] = useState("");
  let navigate = useNavigate();

  const addUniversity = () => {
    api
      .post(`http://127.0.0.1:8180/api/v1/universities`, {
        title: title,
        course: course,
        year: year,
        passing_grade: passing_grade,
      })
      .then((result) => console.log(result.data));
    setTitle("");
    setCourse("");
    setYear("");
    setPassing_grade("");
    navigate("/universities");
  };

  return (
    <div>
      <h2>Add University</h2>
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <TextField
        label="Course"
        variant="outlined"
        value={course}
        onChange={(event) => setCourse(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <TextField
        label="Year"
        variant="outlined"
        value={year}
        onChange={(event) => setYear(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <TextField
        label="Passing grade"
        variant="outlined"
        value={passing_grade}
        onChange={(event) => setPassing_grade(event.target.value)}
        style={{ margin: "1rem" }}
      />
      <br />
      <Button
        variant="contained"
        color="success"
        onClick={addUniversity}
        style={{ margin: "1rem" }}
      >
        Add
      </Button>
      <Button
        variant="contained"
        style={{ margin: "1rem" }}
        onClick={() => navigate("/universities")}
      >
        Back
      </Button>
    </div>
  );
};
export default AddUniversity;
