import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchJob, deleteJob } from '../actions/index';
import { Link } from 'react-router';

class JobsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchJob(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteJob(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    if(! this.props.job) {
      return <div>Loading</div>
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">Back to list </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Job
        </button>
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

export default connect(mapStateToProps, { fetchJob, deleteJob })(JobsShow);
