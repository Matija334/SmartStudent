import React, { useEffect, useState } from "react";
import api from "../../services/api";
import ListTable from "./ListTable";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    const getApplications = () => {
      api.get("http://127.0.0.1:8180/api/v1/list").then((result) => {
        setApplications(result.data);
      });
    };
    getApplications();
  }, []);

  return (
    <>
      <h1>List of applications</h1>
      <ListTable applications={applications} />
    </>
  );
};
export default Applications;
