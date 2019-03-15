/** Dependencies */
import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

/** Icons */
import ViewListIcon from "@material-ui/icons/ViewList";
import GroupIcon from "@material-ui/icons/Group";
import AssigmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

/** Styles */
import "./Sidebar.css";

/** Methods */
class Sidebar extends Component<RouteComponentProps> {
  render() {
    const { props } = this;
    const { history } = props;

    const listClasses = {
      root: "Sidebar__links"
    };

    const listItemClasses = {
      root: "Sidebar__link",
      selected: "Sidebar__link--active"
    };

    const listItemIconClasses = {
      root: "Sidebar__item-text"
    };

    const listItemTextClasses = {
      primary: "Sidebar__item-text"
    };

    return (
      <div className="Sidebar">
        <div className="Sidebar__background_image" />
        <div className="Sidebar__menu">
          <div className="Sidebar__header">
            <div className="Sidebar__logo_container">
              <div className="Sidebar__logo" />
            </div>
            <h1 className="Sidebar__company">YONA TRACKER</h1>
          </div>
          <div className="Sidebar__divider" />
          <List classes={listClasses}>
            <ListItem
              // component={(props: any) => <NavLink to="/checkins" {...props}/>}
              onClick={() => history.push('/checkins')}
              button
              classes={listItemClasses}
              selected={ history.location.pathname == '/checkins' }
            >
              <ListItemIcon classes={listItemIconClasses}>
                <AssigmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText primary="CheckIns" classes={listItemTextClasses} />
            </ListItem>

            <ListItem
              // component={(props: any) => <NavLink to="/projects" {...props}/>}
              onClick={() => history.push('/projects')}
              button
              classes={listItemClasses}
              selected={ history.location.pathname == '/projects' }
            >
              <ListItemIcon classes={listItemIconClasses}>
                <ViewListIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" classes={listItemTextClasses} />
            </ListItem>

            <ListItem
              // component={(props: any) => <NavLink to="/team" {...props}/>}
              onClick={() => history.push('/team')}
              button
              classes={listItemClasses}
              selected={ history.location.pathname == '/team' }
            >
              <ListItemIcon classes={listItemIconClasses}>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Team" classes={listItemTextClasses} />
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
