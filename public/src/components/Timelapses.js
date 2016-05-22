import React, { Component } from 'react';
import TimelapseListContainer from './../containers/TimelapseListContainer';

require('./../styles/app.scss');
class Timelapses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TimelapseListContainer />
    );
  }
}

export default Timelapses;