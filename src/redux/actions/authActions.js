const setUser = (data) => {
  return dispatch => {
    dispatch({
      type: "SET_USER",
      payload: data
    })
  }
};

export { setUser };