import React from 'react';
import { NavLink} from "react-router-dom";

function NavBar() {

  return (
    <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/users/registration" exact>
            Register
          </NavLink>
          <NavLink to="/users/login" exact>
            Login/Logoff
          </NavLink> 
    </nav>
  );
}

export default NavBar;