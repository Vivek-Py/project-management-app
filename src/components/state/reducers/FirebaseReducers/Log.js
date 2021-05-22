const Log = (state = true, action) => {
  switch (action.type) {
    case "SIGNUP":
      return (state = false);
    case "LOGIN":
      return (state = true);
    default:
      return state;
  }
};

export default Log;
