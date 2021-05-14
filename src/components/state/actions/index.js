// For switch between dashboard and adding project
export const addproject = () => {
  return {
    type: "ADDPROJECT",
  };
};

export const nothing = () => {
  return {
    type: "DASHBOARD",
  };
};

// For switch between logged in and out users
export const login = () => {
  return {
    type: "LOGIN",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

// For switch between the urgent and non-urgent work
export const urgent = () => {
  return {
    type: "YES",
  };
};

export const noturgent = () => {
  return {
    type: "NO",
  };
};

// For Project Title
export const updateTitle = (input) => {
  return {
    type: "UPDATE",
    payload: input,
  };
};

// For peoject Head
export const updateHead = (input) => {
  return {
    type: "UPDATEHEAD",
    payload: input,
  };
};

// For team members
export const updateTeam = (input) => {
  return {
    type: "UPDATETEAMMEM",
    payload: input,
  };
};

// For end date
export const updateDate = (input) => {
  return {
    type: "UPDATEDATE",
    payload: input,
  };
};

// For project description
export const updateDescription = (input) => {
  return {
    type: "UPDATEDESC",
    payload: input,
  };
};
