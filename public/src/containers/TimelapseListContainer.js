import React, { Component } from 'react';
import 'whatwg-fetch';
import TimelapseList from '../components/TimelapseList';

class TimelapseListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timelapses: []
    };
  }

  componentDidMount() {
    this.fetchTimelapses();
  }

  fetchTimelapses() {
    fetch('http://localhost:3000/timelapses')
      .then(data => {
        return data.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          timelapses: json.timeLapses
        });  
      });
  }

  render() {
    return <TimelapseList
      timelapses={this.state.timelapses}
    />
  }
}

export default TimelapseListContainer;