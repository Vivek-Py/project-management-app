const ProjectDesc = (state = "", action) => {
  switch (action.type) {
    case "UPDATEDESC":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ProjectDesc;
