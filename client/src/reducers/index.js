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

export function jobsReducer(state = [], action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    default:
      return state;
  }
}
