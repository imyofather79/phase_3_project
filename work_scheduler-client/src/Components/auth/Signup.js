import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Users from '../Users';

function Signup() {

    const [registerData, setRegisterData] = useState("");
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const [error, setError] = useState(null);
    // console.log(registerEntry);

    //  useEffect(() => { 
    //    fetch("http://localhost:9393/registration/last")
    //     .then((r) => r.json())
    //     .then((json) => {
    //         setRegisterData(json);
    //         console.log(json)
    //     }) 
    // }, [])


    useEffect(() => {
        const url = "http://localhost:9393/registration/last";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setRegisterData(json);
            } catch {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    // console.log(registerEntry);
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

    function sendToManagers(registerData){
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
        
            setRegisterData(registerData);
        },
        history.push(`/users/home/${registerData.id}`)
        )
  };

  function sendToStaffs(registerData){
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
          setRegisterData(registerData);
        },
        history.push(`/users/home/${registerData.id}`)
        )
  };   
  

    function handleSubmit(e){
        e.preventDefault();
        // findUsers(registerData);
        let sup = registerData.is_manager
        if (sup){
            sendToManagers(registerData);
        } else {
            sendToStaffs(registerData);
        } 
    }

    // async function findEmail() {
    //     console.log(registerData)
    //     console.log(registerData.username)
    //     const checkUser = await fetch(`http://localhost:9393/signup/${registerData.username}`)
    //     if (checkUser.status === 200){
    //         setError("email has been previously registered, please assign a new email.")
    //     } else  {
    //         let sup = registerData.is_manager
    //         if (sup){
    //             sendToManagers(registerData);
    //         } else {
    //             sendToStaffs(registerData);
    //         } 
    //         // fetch("http://localhost:9393/registration", {
    //         //     method: "POST",
    //         //     headers: {
    //         //         "Accept": "application/json",
    //         //         "Content-Type": "application/json",
    //         //         },
    //         //     body: JSON.stringify(registerData),
    //         //     })
    //         //         .then((r) => r.json())
    //         //         .then(registerData => {
    //         //             if (currentUser.password === currentUser.password_confirmation){
    //         //                 setRegisterData(registerData);
    //         //                 history.push("/registration/signup")
    //         //             } else {
    //         //                 setError("Please check password!")
    //         //             };
    //         //         })
    //     }
    // }

    function handleDelete(e){
        e.preventDefault();

        fetch("http://localhost:9393/registration/signup", {
            method: "DELETE",
            })
                .then((r) => r.json())
                .then(() => (
                handleRemove(registerData)
            ),
            history.push("/registration")
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
                        <option hidden>Department</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Adminstration">Adminstration</option>

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




