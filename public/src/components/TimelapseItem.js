import React, { Component } from 'react';

class TimelapseItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timelapse__list__item">
        <h1>{this.props.title}</h1>
        <p>{this.props.location}</p>
        <p>{this.props.url}</p>
      </div>
    );
  }
}

export default TimelapseItem;