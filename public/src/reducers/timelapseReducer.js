let initialState = {
  timelapses: [],
  fetching: false
};

const timelapseReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_TIMELAPSES':
      return Object.assign({}, state, {
        timelapses: action.timelapses,
        fetching: false
      });
    case 'REQUEST_TIMELPASES':
      return Object.assign({}, state, {
        fetching: true
      });
    case 'ADD_TIMELAPSE':
    case 'REMOVE_TIMELAPSE':
    default:
      return state;
  }
};

export default timelapseReducer;