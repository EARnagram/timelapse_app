import React, { Component } from 'react';
import TimelapseListContainer from './containers/TimelapseListContainer';

require('./styles/app.scss');
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TimelapseListContainer header="Timelapse List" />
    );
  }
}