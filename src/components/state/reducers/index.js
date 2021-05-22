import { combineReducers } from "redux";
import Aproject from "./Aproject";
import EndDate from "./FormReducers/EndDate";
import ProjectDesc from "./FormReducers/ProjectDesc";
import ProjectHead from "./FormReducers/ProjectHead";
import ProjectTitle from "./FormReducers/ProjectTitle";
import TeamMem from "./FormReducers/TeamMem";
import Logged from "./Logged";
import UrgentStatus from "./FormReducers/UrgentStatus";
import User from "./FirebaseReducers/User";
import Email from "./FirebaseReducers/Email";
import Pass from "./FirebaseReducers/Pass";
import Error from "./FirebaseReducers/Error";
import Log from "./FirebaseReducers/Log";
import Toggleform from "./FirebaseReducers/Toggleform";
import Demo from "./Demo";
import Projectlist from "./Projectlist";

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
  user: User,
  email: Email,
  pass: Pass,
  error: Error,
  log: Log,
  toggleform: Toggleform,
  demo: Demo,
  projectlist: Projectlist,
});

export default allReducers;
