import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";


function Signup({onAddUser, handleRemove}) {

    const [registerData, setRegisterData] = useState({})
    // const [users, setUsers] = useState({})
    const history = useHistory();
        

    useEffect(() => {
        fetch("http://localhost:9393/registration/signup")
        .then((r) => r.json())
        .then(registerData)
    }, [])


    console.log(registerData)


    function handleChange(e){
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    }
    function sendToManagers(registerData){
    // let params = {
    //     ...registerData
    // };
    fetch("http://localhost:9393/managers", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        },
    body: JSON.stringify(registerData),
    })
        .then((r) => r.json())
        .then(registerData => {
          onAddUser(registerData);
        },
        history.push(`/user/home/${registerData.user_id}`)
        )
        // sendToUsers(registerData);
  };

  function sendToStaffs(registerData){
    // let params = {
    //     ...registerData
    // };
    fetch("http://localhost:9393/staffs", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        },
    body: JSON.stringify(registerData),
    })
        .then((r) => r.json())
        .then(registerData => {
          onAddUser(registerData);
        },
        history.push(`/user/home/${registerData.user_id}`)
        )
        // sendToUsers(registerData);
  };   
  

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9393/registration/sigup", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                },
            body: JSON.stringify(registerData),
            })
                .then((r) => r.json())
                .then(registerData => {
                //   onAddUser(registerData);
                // },
                // history.push("/users/home")
                // )
                if (registerData.is_manager){
                    sendToManagers(registerData);
                } else {
                    sendToStaffs(registerData);
                } 
                // if (registerData.password === registerData.password_confirmation && registerData.is_manager){
                //     sendToManagers();
                // } else if (registerData.password === registerData.password_confirmation && !registerData.is_manager){
                //     sendToStaffs();
                // } else {
                //     alert("Please check your inputs")
                // }
                },
                history.push("/")
                )
    }
    
    // function onDeleteClick(deleteUser){
    //     const clear = registerData 
    // }


    function handleDelete(e){
        e.preventDefault();

        fetch("http://localhost:9393/registration/signup", {
            method: "DELETE",
            })
                .then((r) => r.json())
                .then(() => (
                handleRemove(registerData),
                history.push("/registration")
            ));
    }

    return (
        <div>
            <h1>User info</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.first_name}
                    name="first_name"
                    placeholder="Your first name here..."
                /> 
                <br />
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.last_name}
                    name="last_name"
                    placeholder="Your last name here..."
                />
                <br />
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.username}
                    name="userame"
                    placeholder="Create a username here..."
                />
                 {/* <br />
                <input
                    type="email"
                    onChange={handleChange}
                    value={registerData.email}
                    name="email"
                    placeholder="Your email here..."
                />
                <br />
                <input
                    type="password"
                    onChange={handleChange}
                    value={registerData.password}
                    name="password"
                    placeholder="Your password here..."
                />
                <br />
                <input
                    type="password"
                    onChange={handleChange}
                    value={registerData.password_confirmation}
                    name="password_confirmation"
                    placeholder="Re-enter your password here..."
                />
                <br />
                <select
                    type="checkbox"
                    onChange={handleChange}
                    value={registerData.is_manager}
                    name="is_manager"
                >
                    <option>Select</option>
                    <option value={true}>Manager</option>
                    <option value={false}>Staff</option>
                </select>
                 */}
                <button type="submit">Update</button>
            </form>
            {/* <Switch>
                <Route path="/registration/signup">
                <Signup handleChange={handleChange}/>  
                </Route>
            </Switch> */}

            <button onClick={handleDelete} type="submit">Start Over</button>
        </div>
    )
}

export default Signup;




