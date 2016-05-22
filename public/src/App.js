import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TimelapseListContainer from './containers/TimelapseListContainer';

require('./styles/app.scss');
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}