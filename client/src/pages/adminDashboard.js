import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import * as actionCreators from "../actions";

import Table from "../components/Table";
import "../css/AdminDashboard.css";
const server = process.env.REACT_APP_API;

const Stacks = ({ values }) => {
  return (
    <>
      {values.map((stack, idx) => {
        return (
          <span key={idx} className="badge">
            {stack.id + "." + stack.title + "\n"}
          </span>
        );
      })}
    </>
  );
};

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

  const columnsAbout = useMemo(
    () => [
      {
        // first group - About
        Header: "About",
        // First group columns
        columns: [
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Description",
            accessor: "description",
          },
          {
            Header: "Info",
            accessor: "info",
          },
          {
            Header: "Stack",
            accessor: "stack",
            Cell: ({ cell: { value } }) => <Stacks values={value} />,
          },
        ],
      },
    ],
    []
  );

  // console.log(tableData);
  if (!tableData.about) {
    return <p>Loading</p>;
  }
  return (
    <section className="dashboard">
      <div className="inner">
        <Button variant="contained" color="primary" onClick={onLogout}>
          Logout
        </Button>
        <br />

        <div className="App">
          <Table columns={columnsAbout} data={tableData.about} />
        </div>
      </div>
    </section>
  );
};

export default connect((state) => state, actionCreators)(AdminDashboard);
