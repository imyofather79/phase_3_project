import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Login from './Components/auth/Login';
import Users from './Components/Users';
import Signup from './Components/auth/Signup';
import Registration from './Components/auth/Registration';
import Department from './Components/Department';


function App() {
  const [users, setUsers] = useState([]);
  // const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => { 
    fetch(`http://localhost:9393/users`)
    .then((r) => r.json())
    .then((json) => {
      setUsers([...json]);
      setIsLoggedIn(false);
    }) 
  }, [])

  function onAddUser(registerData){
    setUsers([...users, registerData])
  };

  const editUser = (registerData) => {
    let params = {
      ...registerData
    }
    fetch(`http://localhost:9393/users/${params.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(params),
            })
              .then((r) => r.json())
              .then(registerData => {
                setUsers(prev =>{
                  return [...prev, registerData]
                })
              });
  }
 // function handleRemove(removeUser){
  //   const updatedUsers = users.filter((user) => 
  //     user !== removeUser);
  //     setUsers(updatedUsers);
  // };
  const handleRemove = async (id) => {
    let resp = await fetch(`http://localhost:9393/users/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    let registerData = await resp.json()
    let remainingUsers = users.filter(user => user.id !== id)
    setUsers([...remainingUsers])
  }


  return (
    <div>
        <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/"><Home isLoggedIn={isLoggedIn} /></Route>
          <Route exact path="/users/registration"><Registration  users={users} setIsLoggedIn={setIsLoggedIn} onAddUser={onAddUser}/></Route>
          <Route exact path="/users/signup"><Signup users={users} onAddUser={onAddUser} editUser={editUser} /></Route>
          <Route exact path="/users/login"><Login users={users} setIsLoggedIn={setIsLoggedIn} onAddUser={onAddUser}/></Route>
          <Route exact path="/users/home/:id"><Users users={users} onAddUser={onAddUser} editUser={editUser} handleRemove={handleRemove}/></Route>
          <Route exact path="/department"><Department users={users} onAddUser={onAddUser} /></Route>

        </Switch>
    </div>
  );
}

export default App;