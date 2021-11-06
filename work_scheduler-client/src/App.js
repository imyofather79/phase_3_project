import React, {useState, useEffect} from 'react';
import { Route, Switch, userHistory } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Login from './Components/auth/Login';
import Registration from './Components/auth/Registration';
// import './App.css';



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([]);
  const history = userHistory();

  useEffect(() => {
    fetch("http://localhost:9393/users")
    .then((r) => r.json())
    .then(setUsers)
  }, [])

  function changeUser(user){
    setCurrentUser(user)
  };

  function onAddUser(registerData){
    setUsers([...users, registerData])
  };

  function sendToUsers(registerData){
    let params = {
        ...registerData
    };
    fetch("http://localhost:9393/users", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        },
    body: JSON.stringify(params),
    })
        .then((r) => r.json())
        .then(registerData => {
            onAddUser(registerData);
        })
  };

  function sendToManagers(registerData){
    let params = {
        ...registerData
    };
    fetch("http://localhost:9393/managers", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        },
    body: JSON.stringify(params),
    })
        .then((r) => r.json())
        .then(registerData => {
          onAddUser(registerData);
        },
        history.push(`/managers/${params.username}`)
        )
        sendToUsers(registerData);
  };

  function sendToStaffs(registerData){
    let params = {
        ...registerData
    };
    fetch("http://localhost:9393/staffs", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        },
    body: JSON.stringify(params),
    })
        .then((r) => r.json())
        .then(registerData => {
          onAddUser(registerData);
        },
        history.push(`/staffs/${params.username}`)
        )
        sendToUsers(registerData);
  };   



  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <Home />  
          </Route>
          <Route exact path="/registration">
              <Registration 
                sendToManagers={sendToManagers} 
                sendToStaffs={sendToStaffs}
              />  
          </Route>
          <Route exact path="/login">
              <Login changeUser={changeUser} />  
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