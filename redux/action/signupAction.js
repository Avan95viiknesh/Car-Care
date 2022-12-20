  const ActionCreators = {
  signup: (user) => ({ type: "SIGNUP", payload: { user } }),

  login: (user) => ({ type: "LOGIN", payload: { user } }),

  formSubmittionStatus: (status) => ({
    type: "FORM_SUBMITION_STATUS",
    payload: { status },
  }),
};

 

export default ActionCreators;
