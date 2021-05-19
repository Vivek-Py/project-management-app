const Email = (state = null, action) => {
  switch (action.type) {
    case "ADDEMAIL":
      return (state = action.payload);
    default:
      return state;
  }
};

export default Email;
