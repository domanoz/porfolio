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

const initialProjectsState = [
  {
    index: 0,
    github: "https://github.com/domanoz/dogLovers-forum",
    image:
      "https://image.shutterstock.com/z/stock-photo-project-management-scheduling-concept-with-gantt-chart-planning-with-tasks-and-milestones-to-1148670914.jpg",
    title: "Example title",
    description: "Example description of the project",
    url: "https://doglovers-dd3c5.web.app/",
    stack: [
      {
        id: 0,
        title: "example stack 1",
      },
      {
        id: 1,
        title: "example stack 2",
      },
    ],
  },
  {
    index: 1,
    github: "https://github.com/domanoz/dogLovers-forum",
    image:
      "https://image.shutterstock.com/z/stock-photo-project-management-scheduling-concept-with-gantt-chart-planning-with-tasks-and-milestones-to-1148670914.jpg",
    title: "Example title2",
    description: "Example description of the project2",
    url: "https://doglovers-dd3c5.web.app/",
    stack: [
      {
        id: 0,
        title: "example stack 12",
      },
      {
        id: 1,
        title: "example stack 23",
      },
    ],
  },
];

export function projectsReducer(state = initialProjectsState, action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    default:
      return state;
  }
}

const initialAboutState = {
  info:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales mauris a elit viverra, vel molestie sapien ornare. Quisque mollis vehicula egestas. Donec consectetur blandit orci, eget mollis ante sagittis et. Proin eu arcu vel est hendrerit imperdiet. Etiam consequat urna quis risus volutpat dapibus. Cras neque urna, posuere eu lorem nec, elementum hendrerit eros. Nam porttitor dui at erat consectetur auctor. Aliquam efficitur porta porta. Donec sed sem tincidunt, imperdiet magna ac, suscipit massa. Suspendisse quis gravida nibh. Quisque sit amet neque ut est aliquet dapibus aliquet at est. Curabitur efficitur molestie dui, in congue quam. Sed euismod pharetra sapien, vitae pellentesque nisl bibendum at.",
  description: "Example description of the project",
  url: "https://doglovers-dd3c5.web.app/",
  stack: [
    {
      id: 0,
      title: "example stack 1",
    },
    {
      id: 1,
      title: "example stack 2",
    },
    {
      id: 2,
      title: "example stack 3",
    },
  ],
};

export function aboutReducer(state = initialAboutState, action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    default:
      return state;
  }
}
