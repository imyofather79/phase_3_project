import React, { useState } from 'react';
import {userHistory} from "react-router-dom";


function Login({changeUser}) {

    const [login, setLogin] = useState({
            username: "",
            password: "",
            loginErrors: ""
        }
    );
    // const [user, setUser] = useState(null);
    // const [error, setError] = useState(null);

    function handleChange(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

//    function handleSuccessfulAuth(data){
//         handleLogin(data);
//         if data.
//         history.push("/Staff");
//     }



function handleSubmit(e){
       e.preventDefault();
        findCurrentUser(login)
}

async function findCurrentUser(username) {
    const response = await fetch(`http://localhost:9393/users/${username}`)
    const user = await response.json()
    if (response.status === 401){
        setError("That user doesn't exist, try again or sign up for an account!")
    } else if (!!user.is_manager){
        changeUser(user)
        history.push(`/managers/${user.id}`)
    } else {
        changeUser(user)
        history.push(`/staffs/${user.id}`)
    }}


return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3 style={{color:"red"}}>{error}</h3>
            <input
                type="email"
                onChange={handleChange}
                value={login.email}
                name="Email"
                placeholder="Your email here..."
            />
            <input
                type="password"
                onChange={handleChange}
                value={login.password}
                name="Password"
                placeholder="Your password here..."
            />
            <button type="submit">Login</button>

        </form>
        
    </div>
);
}

export default Login