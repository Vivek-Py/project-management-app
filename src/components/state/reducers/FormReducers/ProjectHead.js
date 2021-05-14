const ProjectHead = (state = "", action) => {
  switch (action.type) {
    case "UPDATEHEAD":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ProjectHead;
