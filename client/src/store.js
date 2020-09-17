import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  userReducer,
  servicesReducer,
  jobsReducer,
  projectsReducer,
  aboutReducer,
} from "./reducers";
import { loadState, saveState } from "./utils";
import throttle from "lodash/throttle";

const persistedStateKeysInLocalStorage = [
  "user",
  "about",
  "services",
  "jobs",
  "projects",
];
if (process.env.REACT_ENV === "development") {
  const store = createStore(
    combineReducers({
      user: userReducer,
      about: aboutReducer,
      services: servicesReducer,
      jobs: jobsReducer,
      projects: projectsReducer,
    }),
    loadState(persistedStateKeysInLocalStorage),
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  const store = createStore(
    combineReducers({
      user: userReducer,
      about: aboutReducer,
      services: servicesReducer,
      jobs: jobsReducer,
      projects: projectsReducer,
    }),
    loadState(persistedStateKeysInLocalStorage),
    compose(applyMiddleware(thunk))
  );
}

store.subscribe(
  throttle(() => {
    saveState(store.getState(), persistedStateKeysInLocalStorage);
  }, 1000)
);

export default store;
