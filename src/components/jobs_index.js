import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/index';
import { Link } from 'react-router';

class JobsIndex extends Component {
  //react life cycle (start), called only once
  componentWillMount() {
    this.props.fetchJobs();
  }

  renderJobs() {
    return this.props.jobs.map((job) => {
      return (
        <li className="list-group-item" key={job.id}>
          <span className="pull-xs-right"> {job.categories}</span>
          <strong>{job.title}</strong>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/jobs/new" className="btn btn-primary">
            Add a job
          </Link>
        </div>
        <h3>Jobs</h3>
        <ul className="list-group">
          {this.renderJobs()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobs.all };
}

export default connect(mapStateToProps, { fetchJobs })(JobsIndex);
