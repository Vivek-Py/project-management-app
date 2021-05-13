const Aproject = (state = false, action) => {
  switch (action.type) {
    case "ADDPROJECT":
      return (state = true);
    case "DASHBOARD":
      return (state = false);
    default:
      return state;
  }
};

export default Aproject;
