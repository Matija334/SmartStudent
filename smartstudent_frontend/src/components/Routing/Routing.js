import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "../Home/Home";
import Students from "../Students/Students";
import PageNotFound from "../PageNotFound/PageNotFound";
import StudentID from "../Students/StudentID";
import StudentAdd from "../Students/StudentAdd"
import Universities from "../Universities/Universities";
import UniversityID from "../Universities/UniversityID";
import UniversityAdd from "../Universities/UniversityAdd";
import List from "../List/List";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/add" element={<StudentAdd/>} />
      <Route path="/students/:IdStudent" element={<StudentID />} />
      <Route path="/universities" element={<Universities />} />
      <Route path="/universities/add" element={<UniversityAdd/>} />
      <Route path="/universities/:IdUniversity" element={<UniversityID />} />
      <Route path="/applications" element={<List />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
