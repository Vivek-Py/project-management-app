// Reducer for the urgent switch
const UrgentStatus = (state = false, action) => {
  switch (action.type) {
    case "YES":
      return (state = true);
    case "NO":
      return (state = false);
    default:
      return state;
  }
};

export default UrgentStatus;
