import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Login from './Components/auth/Login';
import Users from './Components/Users';
import Manager from './Components/Manager';
import Staff from './Components/Staff';
import Signup from './Components/auth/Signup';
import Registration from './Components/auth/Registration';
// import './App.css';



function App() {
  // const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([]);
  // const history = useHistory();

  // useEffect(() => {
  //   fetch("http://localhost:9393/users")
  //   .then((r) => r.json())
  //   .then(setUsers)
  // }, [])

  function changeUser(user){
    setUsers(user)
  };

  function handleRemove(removeUser){
    const updatedUsers = users.filter((user) => 
      user !== removeUser);
      setUsers(updatedUsers);
  }

  function onAddUser(registerData){
    setUsers([...users, registerData])
  };

  // function sendToUsers(registerData){
  //   let params = {
  //       ...registerData
  //   };
  //   fetch("http://localhost:9393/users", {
  //   method: "POST",
  //   headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       },
  //   body: JSON.stringify(params),
  //   })
  //       .then((r) => r.json())
  //       .then(registerData => {
  //           onAddUser(registerData);
  //       })
  // };

  // function sendToManagers(registerData){
  //   // let params = {
  //   //     ...registerData
  //   // };
  //   fetch("http://localhost:9393/managers", {
  //   method: "POST",
  //   headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       },
  //   body: JSON.stringify(registerData),
  //   })
  //       .then((r) => r.json())
  //       .then(registerData => {
  //         onAddUser(registerData);
  //       },
  //       history.push(`/managers/${registerData.id}`)
  //       )
  //       // sendToUsers(registerData);
  // };

  // function sendToStaffs(registerData){
  //   // let params = {
  //   //     ...registerData
  //   // };
  //   fetch("http://localhost:9393/staffs", {
  //   method: "POST",
  //   headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       },
  //   body: JSON.stringify(registerData),
  //   })
  //       .then((r) => r.json())
  //       .then(registerData => {
  //         onAddUser(registerData);
  //       },
  //       history.push(`/staffs/${registerData.id}`)
  //       )
  //       // sendToUsers(registerData);
  // };   



  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <Home />  
          </Route>
          <Route exact path="/registration">
              <Registration 
                // sendToManagers={sendToManagers} 
                // sendToStaffs={sendToStaffs}
                onAddUser={onAddUser}
              />  
          </Route>
          <Route path="/registration/signup">
                <Signup
                  handleRemove={handleRemove} 
                />  
            </Route>
          <Route path="/sessions">
              <Login changeUser={changeUser} />  
          </Route>
          <Route path="/users">
              <Users />  
          </Route>


          {/* <Route path="/sessions">
              <Manager />  
          </Route>
          
          <Route path="/manager">
              <Manager />  
          </Route>
          <Route path="/staff">
              <Staff /> 
          </Route> */}
        </Switch>
    </div>
  );
}

export default App;