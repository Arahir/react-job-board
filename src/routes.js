import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import JobsIndex from './components/jobs_index';
import JobsNew from './components/jobs_new';
import JobsShow from './components/jobs_show';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="jobs" component={JobsIndex} />
    <Route path="jobs/new" component={JobsNew} />
    <Route path="jobs/:id" component={JobsShow} />
  </Route>
);
