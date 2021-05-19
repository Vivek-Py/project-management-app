const User = (state = null, action) => {
  switch (action.type) {
    case "ADDUSER":
      return (state = action.payload);
    default:
      return state;
  }
};

export default User;
