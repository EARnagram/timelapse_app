import React, { Component } from 'react';
import TimelapseItem from './TimelapseItem';

require('../styles/timelapse-list.scss');
class TimelapseList extends Component {
  constructor(props) {
    super(props);
  }

  renderTimelapseItems() {
    return this.props.timelapses.map((timelapse, index) => {
      return (
        <TimelapseItem
          {...timelapse}
          key={index}
        />
      );
    });
  }

  render() {
    return (
      <div className="timelapse__list">
        {this.renderTimelapseItems()}
      </div>
    );
  }
}

export default TimelapseList;