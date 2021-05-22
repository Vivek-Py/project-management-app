const TeamMem = (state = "1", action) => {
  switch (action.type) {
    case "UPDATETEAMMEM":
      return (state = action.payload);
    default:
      return state;
  }
};

export default TeamMem;
