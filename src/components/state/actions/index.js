// For switch between dashboard and adding project
export const addproject = () => {
  return {
    type: "ADDPROJECT",
  };
};

export const dashboard = () => {
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

// For adding email
export const updateEmail = (input) => {
  return {
    type: "ADDEMAIL",
    payload: input,
  };
};

// For adding pass
export const updatePass = (input) => {
  return {
    type: "ADDPASS",
    payload: input,
  };
};

// For adding error
export const updateError = (input) => {
  return {
    type: "ADDERROR",
    payload: input,
  };
};

// For adding  user
export const updateUser = (input) => {
  return {
    type: "ADDUSER",
    payload: input,
  };
};

// For login and signup
export const updateLogin = () => {
  return {
    type: "LOGIN",
  };
};

export const updateSignup = () => {
  return {
    type: "SIGNUP",
  };
};

// For toggling form
export const toggleFormOn = () => {
  return {
    type: "SHOW",
  };
};

export const toggleDemoOn = () => {
  return {
    type: "TRUE",
  };
};

export const toggleDemoOff = () => {
  return {
    type: "FALSE",
  };
};

export const addProjectlist = (projects) => {
  return {
    type: "ADDPROJECT",
    payload: projects,
  };
};
