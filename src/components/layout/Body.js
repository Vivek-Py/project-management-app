import React from "react";
import { useSelector } from "react-redux";
import AddProject from "../project/AddProject";

const Body = () => {
  // Access state value to check if adding project
  const aproject = useSelector((state) => state.aproject);

  // Return AddProject component if true else show dashboard
  return <div>{aproject ? <AddProject /> : "Showing Dashboard"}</div>;
};

export default Body;
