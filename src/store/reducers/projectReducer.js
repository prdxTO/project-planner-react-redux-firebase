const initState = {
  projects: [
    {id: '1', title: 'Learn React', content: 'Starting to learn react'},
    {id: '2', title: 'Learn Redux', content: 'Starting to learn redux'},
    {id: '3', title: 'Learn Firebase', content: 'Starting to learn firebase'},
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state;
};

export default projectReducer;