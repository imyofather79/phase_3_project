import React, { useState } from 'react';
import {useHistory} from "react-router-dom";


function Login() {

    const history = useHistory();
    const [user, setUser] = useState("");
    const [error, setError] = useState(null);
    
    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    console.log(user)

function handleSubmit(e){
       e.preventDefault();
       let currentUser = user
        findCurrentUser(currentUser)
}

async function findCurrentUser(currentUser) {
    console.log(currentUser)
    const response = await fetch(`http://localhost:9393/users/${currentUser.username}`)
    console.log(response)
    if (response.status === 401){
        setError("That user doesn't exist, try again or sign up for an account!")
    } else  {
        fetch(`http://localhost:9393/users/${currentUser.username}`)
            .then((r) => r.json())
            .then(registerData => {
                console.log(currentUser.password)
                console.log(registerData)
            if (registerData.password == currentUser.password){
                history.push(`/user/home/${registerData.id}`)
                } else {
                    setError("The password is incorrect. Please try again!")
                };
            })
    }
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3 style={{color:"red"}}>{error}</h3>
            <label htmlFor="login" value="username">Username: </label>
            <input
                type="text"
                onChange={handleChange}
                value={user.username}
                name="username"
                placeholder="Your username here..."
                autoFocus={true}
            />
            <label htmlFor="login" value="password">Password: </label>
            <input
                type="password"
                onChange={handleChange}
                value={user.password}
                name="password"
                placeholder="Your password here..."
                autoFocus={true}
            />
            <button type="submit">Login</button>
        </form>
    </div>
);
}

export default Login