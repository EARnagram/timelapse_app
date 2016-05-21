import React, { Component } from 'react';
import TimelapseListContainer from './containers/TimelapseListContainer';

require('./styles/app.scss');
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Timelapses</h1>
        <TimelapseListContainer header="Timelapse List" />
      </div>
    );
  }
}