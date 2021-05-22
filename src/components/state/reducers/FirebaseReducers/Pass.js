const Pass = (state = null, action) => {
  switch (action.type) {
    case "ADDPASS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default Pass;
