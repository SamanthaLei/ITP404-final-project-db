import React from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav  className="navigation-bar">
        <ul className="nav justify-content-center">
          
          <li className="nav-item">
            <NavLink exact={true} className="nav-link" to="/pinned">
              Pinned
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink exact={true} className="nav-link" to="/">
              Notes
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact={true} className="nav-link" to="/notes/new">
              New
            </NavLink>
          </li>

          
        </ul>
      </nav>
    );
  }
}
