import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-light bg-faded">
        <Link className="navbar-brand" to="/">CardioBoard</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">Jobs</Link>
          </li>
        </ul>
        </nav>
        {this.props.children}
      </div>

    );
  }
}
