import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Login from './Components/auth/Login';
import Users from './Components/Users';
import Signup from './Components/auth/Signup';
import Registration from './Components/auth/Registration';



function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();

  // function handleRemove(removeUser){
  //   const updatedUsers = users.filter((user) => 
  //     user !== removeUser);
  //     setUsers(updatedUsers);
  // };

  function onAddUser(registerData){
    setUsers([...users, registerData])
  };

  return (
    <div>
        <NavBar 
        setIsLoggedIn={setIsLoggedIn} 
        isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route exact path="/">
              <Home isLoggedIn={isLoggedIn} />  
          </Route>
          <Route exact path="/registration">
              <Registration 
                setIsLoggedIn={setIsLoggedIn}
                onAddUser={onAddUser}
              />  
          </Route>
          <Route path="/registration/signup">
                <Signup
                  // onAddUser={onAddUser}
                  // handleRemove={handleRemove} 
                />  
            </Route>
          <Route exact path="/login">
              <Login setIsLoggedIn={setIsLoggedIn} />  
          </Route>
          <Route path="/users/home/:id">
                <Users />  
          </Route>
        </Switch>
    </div>
  );
}

export default App;