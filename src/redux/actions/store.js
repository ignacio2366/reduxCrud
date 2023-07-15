import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import user from "../reducers/user";
const middlewares = compose(applyMiddleware(thunk, logger));

const reducers = combineReducers({
  user,
});
export default createStore(reducers, middlewares);
