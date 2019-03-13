/** Dependencies */
import React, { Component } from 'react';

/** Styles */
import './Dashboard.css';

/** Components */
import { Sidebar } from '../Sidebar';

/** Methods */
export class Dashboard extends Component {
  render() {
    return(
      <div className="Dashboard__wrapper">
        <Sidebar/>
        <div className="Dashboard__container">
          <h2>Hello From Dashboard</h2>
        </div>
      </div>
    )
  }
}