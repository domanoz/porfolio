import React from "react";
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
const initialProjectsState = {
  id: 0,
  title: "",
  description: "",
  github: "",
  url: "",
  image: "",
};
const initialServicesState = {
  id: 0,
  icon: "",
  title: "",
  text: "",
};
const initialJobsState = {
  id: 0,
  company: "",
  position: "",
  jobs_description: {
    id: 0,
    name: "",
    jobs_id: 0,
  },
};

const adminDashboard = (props) => {
  // const { logout, history } = props;
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
        <TableDashboard
          table="about"
          initialState={initialAboutState}
          fieldTypes={[null, "string", "string", "string", "array"]}
        />
        <br />
        <br />
        {/* <h1>Projects</h1>
        <TableDashboard
          table="projects"
          initialState={initialProjectsState}
          fieldTypes={[
            null,
            "string",
            "string",
            "text",
            "string",
            "string",
            "number",
          ]}
        />
        <br />
        <br />
        <h1>Questions</h1>
        <TableDashboard
          table="questions"
          initialState={initialQuestionsState}
          fieldTypes={[null, "string", "string", "number"]}
        /> */}
      </div>
    </section>
  );
};

export default connect((state) => state, actionCreators)(adminDashboard);
