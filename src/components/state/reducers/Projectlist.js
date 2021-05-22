const Projectlist = (state = [], action) => {
  switch (action) {
    case "ADDPROJECT":
      return (state = action.payload);
    default:
      return state;
  }
};

export default Projectlist;
