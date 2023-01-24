import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import UniversitiesTable from "./UniversitiesTable";

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    const getUniversities = () => {
      api.get("http://127.0.0.1:8180/api/v1/universities").then((result) => {
        setUniversities(result.data);
      });
    };
    getUniversities();
  }, []);

  return (
    <>
      <h1>Universities</h1>
      <UniversitiesTable universities={universities} />
      <Link style={{ textDecoration: "none" }} to="/universities/add">
        <Button style={{ margin: "2rem" }} color="success" variant="contained">
          Add university
        </Button>
      </Link>
    </>
  );
};
export default Universities;
