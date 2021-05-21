import React from "react";
import { useSelector } from "react-redux";
import AddProject from "../project/AddProject";
import Dashboard from "../project/Dashboard";

const Body = () => {
  // Access state value to check if adding project
  const aproject = useSelector((state) => state.aproject);

  // Return AddProject component if true else show dashboard
  return (
    <div className="body-switch" data-testid="nav-links">
      {aproject ? <AddProject /> : <Dashboard />}
    </div>
  );
};

export default Body;
