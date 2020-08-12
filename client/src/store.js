import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { servicesReducer } from "./reducers";
import { loadState, saveState } from "./utils";
import throttle from "lodash/throttle";

const persistedStateKeysInLocalStorage = ["services"];
const store = createStore(
  combineReducers({
    services: servicesReducer,
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
