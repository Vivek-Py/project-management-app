const Error = (state = null, action) => {
  switch (action.type) {
    case "ADDERROR":
      return (state = action.payload);
    default:
      return state;
  }
};

export default Error;
