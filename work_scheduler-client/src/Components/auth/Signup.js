import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Users from '../Users';

function Signup({onAddUser, registerEntry}) {

    const [registerData, setRegisterData] = useState("");
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [error, setError] = useState(null);
    console.log(registerEntry);

    //  useEffect(() => { 
    //    fetch("http://localhost:9393/registration/last")
    //     .then((r) => r.json())
    //     .then((json) => {
    //         setRegisterData(json);
    //         console.log(json)
    //     }) 
    // }, [])


    // useEffect(() => {
    //     const url = "http://localhost:9393/users/last";
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             setRegisterData(json);
    //         } catch {
    //             console.log("error", error);
    //         }
    //     };
    //     fetchData();
    // }, [registerEntry]);

    console.log(registerEntry);
    console.log(registerData);

    function handleChange(e){
        setRegisterData({
            ...registerData,
            username: registerData.username,
            user_id: registerData.id,
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
        fetch(`http://localhost:9393/users/${registerData.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              body: registerData,
            }),
          })
            .then((r) => r.json())
            .then((registerData) => setRegisterData(registerData));
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
            history.push("/users")
            );
    }

    return (
        <div>
            <h1>User info</h1>
            <form onSubmit={handleSubmit}>
            <h3 style={{color:"red"}}>{error}</h3>
                <label>First name: </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.first_name}
                    name="first_name"
                    placeholder="Your first name here..."
                /> 
                {/* <br /> */}
                <label>Last name: </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.last_name}
                    name="last_name"
                    placeholder="Your last name here..."
                />
                <br />
                <label>Department: </label>
                <select 
                        name="department"
                        value={registerData.department}
                        onChange={handleChange}
                 >
                        <option >Department</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Adminstration">Adminstration</option>
                        <option value="Shipping">Shipping</option>
                        <option value="Operation">Operation</option>
                        <option value="Logistics">Logistics</option>
                        <option value="Retails">Retails</option>

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




