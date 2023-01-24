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
import React, { useState } from "react";

const removeStudent = (id) => {
  console.log(id);
  api.delete(`http://127.0.0.1:8180/api/v1/students/${id}`);
  window.location.reload();
};

export default function StudentsTable({ students }) {
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
              <strong>Name</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Last name</strong>
            </TableCell>
            <TableCell align="center">
              <strong>E-mail</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Final grade</strong>
            </TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="center">{student.name}</TableCell>
              <TableCell align="center">{student.last_name}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
              <TableCell align="center">{student.final_grade}</TableCell>
              <TableCell align="left">
                {
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/students/${student.id}`)}
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
                    onClick={() => removeStudent(student.id)}
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
