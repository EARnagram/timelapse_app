import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTimelapses } from '../actions/timelapseActions';

import TimelapseList from '../components/TimelapseList';

class TimelapseListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTimelapses();
  }

  render() {
    return <TimelapseList
      timelapses={this.props.timelapses}
    />
  }
}

const mapStateToProps = state => {
  return {
    timelapses: state.timelapses.timelapses
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTimelapses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelapseListContainer);