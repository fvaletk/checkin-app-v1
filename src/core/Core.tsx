/** Dependencies */
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';

/** Components */
import { DashboardContainer } from '../Dashboard'

export const Core: React.FunctionComponent = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" component={DashboardContainer}></Route>
      </Switch>
    </Router>
  )
}