export const createProject = (project) => {
  return (dispatch, getState) => {
    // placeholder: make async call

    dispatch({
      type: 'CREATE_PROJECT',
      project: project
    });
  };
};