import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";

import { connect } from "react-redux";
import * as actionCreators from "../actions";

import DatabaseTable from "./DatabaseTable";
// import Loading from "./Loading";

const server = process.env.REACT_APP_API;

const TableDashboard = (props) => {
  const { table, initialState, fieldTypes } = props;
  const [form, setForm] = useState(initialState);
  const [tableData, setTableData] = useState([]);
  const allFields = Object.keys(initialState);

  let user = JSON.parse(localStorage.getItem("doman_user"));
  let options = {
    headers: {
      authorization: user && user.token ? user.token : null,
    },
  };

  useEffect(() => {
    if (!tableData.length) {
      axios
        .get(`${server}/api/v1/${table}`)
        .then((response) => {
          setTableData(response.data);
        })
        .catch((err) => console.error(err));
    }
    if (!Object.keys(user).length) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      user = JSON.parse(localStorage.getItem("doman_user"));
    } else {
      options.headers.authorization = user.token;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = { ...form };
    fieldTypes.forEach((fieldType, i) => {
      if (fieldType === "number") {
        data[allFields[i]] = Number(data[allFields[i]]);
      }
    });
    if (form.id === 0) {
      delete data.id;
      axios
        .post(`${server}/api/v1/${table}`, data, options)
        .then((response) => {
          if (response.data.id) {
            setTableData(tableData.concat(response.data));
            setForm(initialState);
          } else {
            console.error(response);
          }
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .put(`${server}/api/v1/${table}/${form.id}`, data, options)
        .then((response) => {
          if (response.data) {
            setTableData(
              tableData.map((row) => (row.id === form.id ? response.data : row))
            );
            setForm(initialState);
          } else {
            console.error(response);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const onEdit = (id) => (e) => {
    setForm(tableData.find((row) => row.id === id));
  };

  const onDelete = (id) => (e) => {
    axios
      .delete(`${server}/api/v1/${table}/${id}`, options)
      .then((response) => {
        if (response.data) {
          setTableData(tableData.filter((row) => row.id !== id));
        } else {
          console.error(response);
        }
      })
      .catch((err) => console.error(err));
  };

  console.log(tableData);

  // if (!options.headers.authorization) {
  //   return <Loading />;
  // }

  return (
    <>
      <DatabaseTable
        table={tableData}
        fields={allFields}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <br />
      <br />
      <form noValidate onSubmit={onSubmit}>
        <Grid container>
          {allFields.map((field, i) => {
            if (fieldTypes[i] === "number") {
              return (
                <TextField
                  key={table + "_" + field}
                  margin="normal"
                  variant="outlined"
                  type="number"
                  required
                  fullWidth
                  id={table + "_" + field}
                  label={field}
                  name={field}
                  autoComplete={field}
                  value={form[field]}
                  onChange={onInputChange}
                />
              );
            } else if (fieldTypes[i] === "string") {
              return (
                <TextField
                  key={table + "_" + field}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id={table + "_" + field}
                  label={field}
                  name={field}
                  autoComplete={field}
                  value={form[field]}
                  onChange={onInputChange}
                />
              );
            } else if (fieldTypes[i] === "text") {
              return (
                <TextField
                  key={table + "_" + field}
                  variant="outlined"
                  margin="normal"
                  multiline
                  required
                  fullWidth
                  id={table + "_" + field}
                  label={field}
                  name={field}
                  autoComplete={field}
                  value={form[field]}
                  onChange={onInputChange}
                />
              );
            } else if (fieldTypes[i] === "array") {
              return (
                <TextField
                  key={table + "_" + field}
                  variant="outlined"
                  margin="normal"
                  multiline
                  required
                  fullWidth
                  id={table + "_" + field}
                  label={field}
                  name={field}
                  autoComplete={field}
                  value={form[field]}
                  onChange={onInputChange}
                />
              );
            }
            return null;
          })}
        </Grid>
        <br />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
          style={{ marginTop: "1rem" }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default connect((state) => state, actionCreators)(TableDashboard);
