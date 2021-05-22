const Toggleform = (state = false, action) => {
  switch (action.type) {
    case "SHOW":
      return (state = true);
    default:
      return state;
  }
};

export default Toggleform;
