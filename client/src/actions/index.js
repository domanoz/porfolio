import * as types from "./types";
import axios from "axios";

const server = process.env.REACT_APP_API;

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

export const login = (form) => (dispatch) => {
  axios
    .post(`${server}/api/v1/login`, form)
    .then((response) => {
      dispatch({
        type: types.SET_USER,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.SET_USER,
        payload: err.response.data,
      });
    });
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};
