import { combineReducers } from "redux";
import Aproject from "./Aproject";
import EndDate from "./FormReducers/EndDate";
import ProjectDesc from "./FormReducers/ProjectDesc";
import ProjectHead from "./FormReducers/ProjectHead";
import ProjectTitle from "./FormReducers/ProjectTitle";
import TeamMem from "./FormReducers/TeamMem";
import Logged from "./Logged";
import UrgentStatus from "./FormReducers/UrgentStatus";

// We're combining all the reducers here
const allReducers = combineReducers({
  aproject: Aproject,
  logged: Logged,
  urgentstatus: UrgentStatus,
  projectitle: ProjectTitle,
  projecthead: ProjectHead,
  teammem: TeamMem,
  enddate: EndDate,
  projectdesc: ProjectDesc,
});

export default allReducers;
