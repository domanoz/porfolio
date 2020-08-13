import React from "react";
import * as types from "../actions/types";
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa";

const initialServicesState = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
];

export function servicesReducer(state = initialServicesState, action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    case types.SET_SERVICES:
      return state;
    default:
      return state;
  }
}

const initialJobsState = [
  {
    id: 0,
    company: "Example company",
    position: "Data analist",
    description: [
      {
        id: 1,
        name: "Example desc  lorem ipsum bla",
      },
      {
        id: 2,
        name: "Example description lorem ipsum bla bla bal",
      },
    ],
  },
  {
    id: 1,
    company: "Example company 2",
    position: "Data analist 2",
    description: [
      {
        id: 1,
        name: "Example desc  lorem ipsum bla 222",
      },
      {
        id: 2,
        name: "Example description lorem ipsum bla bla bal 222",
      },
    ],
  },
];
export function jobsReducer(state = initialJobsState, action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    default:
      return state;
  }
}

export function projectsReducer(state = [], action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    default:
      return state;
  }
}
