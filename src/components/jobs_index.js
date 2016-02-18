import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';

class JobsIndex extends Component {
  //react life cycle (start), called only once
  componentWillMount() {
    this.props.fetchJobs();
  }
  render() {
    return (
      <div> List of jobs </div>
    )
  }
}

export default connect(null, { fetchJobs })(JobsIndex);
