import React from 'react';
import { NavLink} from "react-router-dom";

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  function showLoggedIn(){
    if(!!isLoggedIn){
      setIsLoggedIn(true)
      return "Logoff"
    } else {
      setIsLoggedIn(false)
      return "Login"
    }
  }

  return (
    <nav>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/departments" exact>
            Departments
          </NavLink>
          <NavLink to="/users/registration" exact>
            Register 
          </NavLink>
          <NavLink to="/users/login" exact>
            {showLoggedIn()}
          </NavLink> 
    </nav>
  );
}

export default NavBar;