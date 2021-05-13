import { combineReducers } from "redux";
import Aproject from "./Aproject";
import Logged from "./Logged";

const allReducers = combineReducers({
  aproject: Aproject,
  logged: Logged,
});

export default allReducers;
