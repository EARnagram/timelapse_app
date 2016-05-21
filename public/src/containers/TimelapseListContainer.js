import React, { Component } from 'react';
import TimelapseList from '../components/TimelapseList';

class TimelapseListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timelapses: [
        {
          title: 'picture',
          location: 'CA',
          url: 'google.com'
        },
        {
          title: 'picture',
          location: 'CA',
          url: 'google.com'
        },
        {
          title: 'picture',
          location: 'CA',
          url: 'google.com'
        }
      ]
    }
  }

  render() {
    return <TimelapseList
      header="Timelapse List"
      timelapses={this.state.timelapses}
    />
  }
}

export default TimelapseListContainer;