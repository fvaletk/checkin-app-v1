/** Dependencies */
import React, { Component } from 'react';

/** Styles */
import './Sidebar.css';

/** Methods */
export class Sidebar extends Component {
  render() {
    return(
      <div className="Sidebar">
        <div className="Sidebar__background_image"></div>
        <div className="Sidebar__menu">
          <div className="Sidebar__header">
            <div className="Sidebar__logo_container">
              <div className="Sidebar__logo"></div>
            </div>
            <h1 className="Sidebar__company">YONA TRACKER</h1>
          </div>
          <div className="Sidebar__divider"></div>
        </div>
      </div>
    )
  }
}