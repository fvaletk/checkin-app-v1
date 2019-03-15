/** Dependencies */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/** Styles */
import './Dashboard.css';

/** Components */
import { Sidebar } from '../Sidebar';
import { CheckIns } from '../CheckIns';
import { Projects } from '../Projects';
import { Team } from '../Team';

/** Methods */
export class Dashboard extends Component {
  render() {
    return(
      <div className="Dashboard__wrapper">
        <Sidebar/>
        <div className="Dashboard__container">
          <Switch>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/team" component={Team}></Route>
            <Route path="/checkins" component={CheckIns}></Route>
            <Route render={() => <Redirect to="/checkins"/>}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}