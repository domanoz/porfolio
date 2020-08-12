import * as types from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case types.VIEW:
      return state;
    default:
      return state;
  }
}
