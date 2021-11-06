import React from 'react';
import { NavLink } from "react-router-dom";
// import Home from "./Components/Home";
// import Login from './Components/auth/Login';
// import Registration from './Components/auth/Registration';

function NavBar() {


  return (
    <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/registration">
            Register
          </NavLink>
          <NavLink to="/login">
            Login
          </NavLink>
    </nav>
  );
}

export default NavBar;