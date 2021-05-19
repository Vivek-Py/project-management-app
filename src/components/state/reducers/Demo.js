const Demo = (state = false, action) => {
  switch (action.type) {
    case "FALSE":
      return (state = false);
    case "TRUE":
      return (state = true);
    default:
      return state;
  }
};

export default Demo;
