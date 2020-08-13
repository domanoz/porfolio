import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  servicesReducer,
  jobsReducer,
  projectsReducer,
  aboutReducer,
} from "./reducers";
import { loadState, saveState } from "./utils";
import throttle from "lodash/throttle";

const persistedStateKeysInLocalStorage = ["services"];
const store = createStore(
  combineReducers({
    about: aboutReducer,
    services: servicesReducer,
    jobs: jobsReducer,
    projects: projectsReducer,
  }),
  loadState(persistedStateKeysInLocalStorage),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(
  throttle(() => {
    saveState(store.getState(), persistedStateKeysInLocalStorage);
  }, 1000)
);

export default store;
