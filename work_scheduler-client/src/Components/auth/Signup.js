import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Users from '../Users';

function Signup({onAddUser, currentUser, setCurrentUser}) {

    const [registerData, setRegisterData] = useState({});
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [error, setError] = useState(null);
    console.log(currentUser);



    function handleChange(e){
        setRegisterData({
            ...currentUser,
            [e.target.name]: e.target.value
        });
    }

    function handleRemove(removeUser){
        const updatedUsers = users.filter((user) => 
          user !== removeUser);
          setUsers(updatedUsers);
      };



    function handleSubmit(e){
        e.preventDefault();
        console.log(currentUser.id)
        fetch(`http://localhost:9393/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              body: registerData,
            }),
          })
            .then((r) => r.json())
            .then((r) => {
                setCurrentUser(r);
                setRegisterData(r);
            });
    }

  

    function handleDelete(e){
        e.preventDefault();
        fetch("http://localhost:9393/users/last", {
            method: "DELETE",
            })
                .then((r) => r.json())
                .then(() => (
                handleRemove(registerData)
            ),
            history.push("/users/registration")
            );
    }

    return (
        <div>
            <h1>User info</h1>
            <form onSubmit={handleSubmit}>
            <h3 style={{color:"red"}}>{error}</h3>
                
                <label>Department: </label>
                <select 
                        name="department"
                        value={registerData.department_id}
                        onChange={handleChange}
                 >
                        <option hidden>Department</option>
                        <option value="1">Accounting</option>
                        <option value="2">Adminstration</option>
                        <option value="3">Shipping</option>
                        <option value="4">Operation</option>
                        <option value="5">Logistics</option>
                        <option value="6">Retails</option>

                </select>
                {/* <label>Email: </label> */}
                <input
                    type="email"
                    onChange={handleChange}
                    value={registerData.email}
                    name="email"
                    hidden
                />
                <br />
                <input
                    type="text"
                    value={registerData.username}
                    name="username"
                    hidden
                />

                <input
                    type="password"
                    value={registerData.password}
                    name="password"
                    hidden
                />
                
                <input
                    type="text"
                    value={registerData.id}
                    name="user_id"
                    hidden
                />
                
                <select
                    type="checkbox"
                    value={registerData.is_manager}
                    name="is_manager"
                    hidden
                >
                    <option>Select</option>
                    <option value={true}>Manager</option>
                    <option value={false}>Staff</option>
                </select>
                
                 <br />
                <button type="submit">Update</button>
            </form>
            <button onClick={handleDelete} type="submit">Start Over</button>

            <Switch>
                <Route path="/users/home/:id">
                    <Users signUpUserData={registerData}/>  
                </Route>
            </Switch>
        </div>
    )
}

export default Signup;




