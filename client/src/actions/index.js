import * as types from "./types";
import axios from "axios";

const server = "http://localhost:4000";

export const getServices = () => (dispatch) => {
  axios.get(`${server}/api/v1/services`).then(({ data: services }) => {
    dispatch({
      type: types.SET_SERVICES,
      payload: services,
    });
  });
};

export const getJobs = () => (dispatch) => {
  axios.get(`${server}/api/v1/jobs`).then(({ data: jobs }) => {
    dispatch({
      type: types.SET_JOBS,
      payload: jobs,
    });
  });
};

export const getProjects = () => (dispatch) => {
  axios.get(`${server}/api/v1/projects`).then(({ data: projects }) => {
    dispatch({
      type: types.SET_PROJECTS,
      payload: projects,
    });
  });
};

export const getAbout = () => (dispatch) => {
  axios.get(`${server}/api/v1/about`).then(({ data: about }) => {
    dispatch({
      type: types.SET_ABOUT,
      payload: about,
    });
  });
};
