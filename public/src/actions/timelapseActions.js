import 'whatwg-fetch';

export function receiveTimelapses(timelapses) {
  return {
    type: 'RECEIVE_TIMELAPSES',
    timelapses: timelapses
  }
}

export function fetchTimelapses() {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/timelapses')
      .then(data => {
        return data.json();
      })
      .then(json => {
        dispatch(receiveTimelapses(json.timeLapses))
      });
  }
}