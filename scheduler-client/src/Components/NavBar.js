import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {


  return (
    <nav id="navbar">
          <NavLink to="/" exact className="button">
            Home
          </NavLink>
    </nav>
  );
}

export default NavBar;