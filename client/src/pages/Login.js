import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Title from "../components/Title";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

import "../css/Login.css";

const initialLoginFormState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const { user, login } = props;

  const [loginForm, setLoginForm] = useState(initialLoginFormState);

  const onLogin = (e) => {
    e.preventDefault();
    login(loginForm);
    setLoginForm(initialLoginFormState);
  };

  const onLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <section className="admin">
      <div className="inner">
        <Title title="Sign In" />
        <form noValidate onSubmit={onLogin}>
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
                value={loginForm.username}
                onChange={onLoginFormChange}
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
                value={loginForm.password}
                onChange={onLoginFormChange}
              />
            </Grid>
          </Grid>
          <br />
          {user && user.message ? <p>{user.message}</p> : null}
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
};

export default connect((state) => state, actionCreators)(Login);
