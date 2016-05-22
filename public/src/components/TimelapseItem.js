import React, { Component } from 'react';
require('../styles/timelapse-item.scss');

class TimelapseItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timelapse__item">
        <h1 className="timelapse__title">{this.props.name}</h1>
        <p className="timelapse__location">{this.props.latlon}</p>
        <img
          className="timelapse__image"
          src={this.props.url}
          alt={this.props.name}
        />
      </div>
    );
  }
}

export default TimelapseItem;