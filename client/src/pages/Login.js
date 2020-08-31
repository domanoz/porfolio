import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";

import { connect } from "react-redux";
import * as actionCreators from "../actions";

import "../css/Login.css";

const initialLoginFormState = {
  username: "",
  password: "",
};

const Login = (props) => (
  <section className="admin">
    <div className="inner">
      <p>Sign In</p>
      <form noValidate>
        {/* {(onSubmit = { onLogin })} */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              // value={loginForm.username}
              // onChange={onLoginFormChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // value={loginForm.password}
              // onChange={onLoginFormChange}
            />
          </Grid>
        </Grid>
        <br />
        {/* {user && user.message ? <p>{user.message}</p> : null} */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
          style={{ marginTop: "1rem" }}
        >
          Login
        </Button>
      </form>
    </div>
  </section>
);

export default Login;
