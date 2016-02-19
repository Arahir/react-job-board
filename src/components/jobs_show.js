import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../actions/index';

class JobsShow extends Component {
  componentWillMount() {
    this.props.fetchJob(this.props.params.id);
  }

  render() {
    if(! this.props.job) {
      return <div>Loading</div>
    }

    return (
      <div>
        <h3> {this.props.job.title} </h3>
        <h6> Categories: {this.props.job.categories}</h6>
        <p> {this.props.job.content} </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { job: state.jobs.job };
}

export default connect(mapStateToProps, { fetchJob })(JobsShow);
