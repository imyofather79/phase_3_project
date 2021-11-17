import React, { useState } from 'react';
import { Route, useHistory } from "react-router-dom";
import Users from '../Users';


function Login({setIsLoggedIn, onAddUser}) {

    const history = useHistory();
    const [user, setUser] = useState("");
    const [registerData, setRegisterData] = useState("");
    const [error, setError] = useState(null);
    
    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

   async function handleSubmit(e){
        e.preventDefault();
        let currentUser = user
            findCurrentUser(currentUser)
    }

    async function findCurrentUser(currentUser) {
        const response = await fetch(`http://localhost:9393/users/${currentUser.username}`)
        if (response.status === 401){
            setError("That user doesn't exist, try again or sign up for an account!")
        } else  {
            fetch(`http://localhost:9393/users/${currentUser.username}`)
                .then((r) => r.json())
                .then(registerData => {
                if (registerData.password === currentUser.password){
                    setRegisterData(registerData);
                    setIsLoggedIn(true);
                    onAddUser(registerData);
                    history.push(`/users/home/${registerData.id}`)
                    } else {
                        setError("The password is incorrect. Please try again!")
                    };
                })
        }
}

console.log(registerData)
console.log(user)
let signUpUserData = registerData;

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
        <Route path="/users/home/:id">
            <Users 
            registerData={registerData}
            signUpUserData={signUpUserData}
            />  
        </Route>
    </div>
);
}

export default Login