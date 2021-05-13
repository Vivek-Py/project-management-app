const Logged = (state = false, action) => {
  switch (action.type) {
    case "login":
      return (state = true);
    case "logout":
      return (state = false);
    default:
      return state;
  }
};

export default Logged;
