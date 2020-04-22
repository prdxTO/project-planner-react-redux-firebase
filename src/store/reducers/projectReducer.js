const initState = {
  projects: [
    {id: '1', title: 'Learn React', content: 'Starting to learn react'},
    {id: '2', title: 'Learn Redux', content: 'Starting to learn redux'},
    {id: '3', title: 'Learn Firebase', content: 'Starting to learn firebase'},
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;