import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import React from "react";

const removeUniversity = (id) => {
  console.log(id);
  api.delete(`http://127.0.0.1:8180/api/v1/universities/${id}`);
  window.location.reload();
};

export default function UniversitiesTable({ universities }) {
  let navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Id</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Title</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Course</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Year</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Passing grade</strong>
            </TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {universities.map((university) => (
            <TableRow
              key={university.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {university.id}
              </TableCell>
              <TableCell align="center">{university.title}</TableCell>
              <TableCell align="center">{university.course}</TableCell>
              <TableCell align="center">{university.year}</TableCell>
              <TableCell align="center">{university.passing_grade}</TableCell>
              <TableCell align="left">
                {
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/universities/${university.id}`)}
                  >
                    Edit
                  </Button>
                }
              </TableCell>
              <TableCell align="left">
                {
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => removeUniversity(university.id)}
                  >
                    Remove
                  </Button>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
