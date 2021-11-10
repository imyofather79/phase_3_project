import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";


function Signup({onAddUser, handleRemove}) {

    const [registerData, setRegisterData] = useState("");
    const history = useHistory();

    useEffect(() => {
        const url = "http://localhost:9393/registration/signup";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setRegisterData(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    function handleChange(e){
        setRegisterData({
            ...registerData,
            user_id: registerData.id,
            [e.target.name]: e.target.value
        });
    }
console.log(registerData)
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
        
            onAddUser(registerData);
        },
        history.push(`/user/home/${registerData.id}`)
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
          onAddUser(registerData);
        },
        history.push(`/user/home/${registerData.id}`)
        )
  };   
  

    function handleSubmit(e){
        e.preventDefault();
        let sup = registerData.is_manager
        if (sup){
            sendToManagers(registerData);
        } else {
            sendToStaffs(registerData);
        } 
    }

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
                <select 
                        name="department"
                        value={registerData.department}
                        onChange={handleChange}
                 >
                        <option hidden>Department</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Adminstration">Adminstration</option>

                </select>
                
                <input
                    type="text"
                    value={registerData.username}
                    name="username"
                    hidden
                />
                 
                <input
                    type="email"
                    value={registerData.email}
                    name="email"
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
        </div>
    )
}

export default Signup;




