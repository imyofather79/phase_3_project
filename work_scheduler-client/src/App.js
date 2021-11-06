import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Login from './Components/auth/Login';
import Registration from './Components/auth/Registration';
// import './App.css';



function App() {
  

  // useEffect(() => {
  //   fetch("http://localhost:4000/")
  //   .then((r) => r.json())
  //   .then()
  // }, [])


  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <Home />  
          </Route>
          <Route exact path="/registration">
              <Registration />  
          </Route>
          <Route exact path="/login">
              <Login />  
          </Route>
          <Route exact path="/manager">
              <Manager />  
          </Route>
          <Route exact path="/staff">
              <Staff />
          </Route>
        </Switch>
    </div>
  );
}

export default App;