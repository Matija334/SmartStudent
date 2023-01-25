import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UniversityID() {
  let { IdUniversity } = useParams();
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [passing_grade, setPassing_grade] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    api.get(`http://127.0.0.1:8180/api/v1/universities/${IdUniversity}`).then((result) => {
      setTitle(result.data.title);
      setCourse(result.data.course);
      setYear(result.data.year);
      setPassing_grade(result.data.passing_grade);
    });
  }, ['IdUniversity']);

  const editUniversity = () => {
    api
      .put(`http://127.0.0.1:8180/api/v1/universities/${IdUniversity}`, {
        title: title,
        course: course,
        year: year,
        passing_grade: passing_grade,
      })
      .then((result) => console.log(result.data));
    navigate("/universities");
  };

  return (
    <>
      <div>
        <h2>Edit University</h2>
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
          onClick={editUniversity}
          style={{ margin: "1rem" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          style={{ margin: "1rem" }}
          onClick={() => navigate("/universities")}
        >
          Back
        </Button>
      </div>
    </>
  );
}
