import React from "react";
import { NavLink } from "react-router-dom";
import "./SimpleHeader.css";
import { greeting } from "../../portfolio";

function SimpleHeader() {
  return (
    <nav className="simple-header">
      <div className="nav-content">
        <NavLink to="/" className="nav-brand">
          {greeting.logo_name}
        </NavLink>
        <div className="nav-items">
          <NavLink
            to="/experience"
            className="nav-link"
            activeClassName="active"
          >
            Experience
          </NavLink>
          <NavLink
            to="/education"
            className="nav-link"
            activeClassName="active"
          >
            Education
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default SimpleHeader;
