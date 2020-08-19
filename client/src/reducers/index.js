import * as types from "../actions/types";

const initialServicesState = [];

export function servicesReducer(state = initialServicesState, action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    case types.SET_SERVICES:
      return action.payload;
    default:
      return state;
  }
}

const initialJobsState = [];
export function jobsReducer(jobs = initialJobsState, action) {
  switch (action.type) {
    case types.VIEW:
      return jobs;
    case types.SET_JOBS:
      return action.payload;
    default:
      return jobs;
  }
}

const initialProjectsState = [];

export function projectsReducer(state = initialProjectsState, action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    case types.SET_PROJECTS:
      return action.payload;
    default:
      return state;
  }
}

const initialAboutState = {};

export function aboutReducer(state = initialAboutState, action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    case types.SET_ABOUT:
      return action.payload;
    default:
      return state;
  }
}
