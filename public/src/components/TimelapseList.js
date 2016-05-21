import React, { Component } from 'react';
import TimelapseItem from './TimelapseItem';

class TimelapseList extends Component {
  constructor(props) {
    super(props);
  }

  renderTimelapseItems() {
    return this.props.timelapses.map(timelapse => {
      return <TimelapseItem {...timelapse} />
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.header}</h1>
        {this.renderTimelapseItems()}
      </div>
    )
  }
}

export default TimelapseList;