const EndDate = (state = "00/00/0000", action) => {
  switch (action.type) {
    case "UPDATEDATE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default EndDate;
