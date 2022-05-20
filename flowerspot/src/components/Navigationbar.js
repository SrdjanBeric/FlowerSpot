import React from "react";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from "react-bootstrap";
import "./style/Navigationbar.css";

import icon from "../images/Vector.png"

function Navigationbar() {
  return (
    <div className="navigation-panel">
      <div className="left-align">
        <img src={icon}/>
        <h1 className="company-name header-text">FlowerSpot</h1>
      </div>
      <div className="right-align">
        <button className="nav-button header-text">Flowers</button>
        <button className="nav-button header-text">Latest Sightings</button>
        <button className="nav-button login header-text">Login</button>
        <button className="nav-button new-account header-text">New Account</button>
      </div>

    </div>
  );
}

export default Navigationbar;
