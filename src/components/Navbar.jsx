import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/dashboard">Go to dashboard</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
