import React, { useState } from 'react';
import {userHistory} from "react-router-dom";


function Login(props) {

    const [login, setLogin] = useState({
            username: "",
            // email: "",
            password: "",
            loginErrors: ""
        }
    );
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);

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

       
       fetch("http://localhost:4000/sessions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        username: login.username,
        password: login.password
            }),
        })
        // { withCredentials: true }
        .then((r) => r.json())
        .then(r => {
            if (r.data.logg_in){
                handleSuccessfulAuth(r.data);
            }
        })
        .catch((error) => {
            alert("Please check your inputs", error)
        });

   }



//    async function findCurrentUser(username) {
//     const response = await fetch(`${baseUrl}/users/${username}`)
//     if (response.status === 401) {
//       setError("That user doesn't exist, try again or sign up for an account!")
//     } else {
//       const user = await response.json()
//       changeUser(user)
//       history.push(`/users/${user.id}/trips`)
//     }
//   }

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

export default Login;