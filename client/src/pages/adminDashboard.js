import React, { useEffect, useState } from "react";
import axios from "axios";

import TableDashboard from "../components/TableDashboard";
import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import * as actionCreators from "../actions";

const initialAboutState = {
  id: 0,
  info: "",
  description: "",
  url: "",
  about_stack: {
    id: 0,
    title: "",
    about_id: 0,
  },
};

const server = process.env.REACT_APP_API;

const AdminDashboard = (props) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/api/v1/getAllData`)
      .then((response) => {
        setTableData(response.data);
      })
      .catch((err) => console.error(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogout = () => {
    //   logout();
    //   history.push("/");
    console.log("logout");
  };
  return (
    <section className="dashboard">
      <div className="inner">
        <Button variant="contained" color="primary" onClick={onLogout}>
          Logout
        </Button>
        <br />
        <br />
        <h1>About</h1>
      </div>
    </section>
  );
};

export default connect((state) => state, actionCreators)(AdminDashboard);
