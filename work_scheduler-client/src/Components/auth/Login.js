import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


function Login({ users, setIsLoggedIn, setCurrentUser }) {

    const history = useHistory();
    const [login, setLogin] = useState({ });
    const [error, setError] = useState(null);

    function handleChange(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

   async function handleSubmit(e){
        e.preventDefault();
        findCurrentUser(login)
    }
    async function findCurrentUser(){
        let checkUsername = users.filter((user) => user.username === login.username)
        console.log(checkUsername[0])
        if(checkUsername[0].username !== login.username){
            setError("user does not exist.")
        } else {   
            if (checkUsername[0].password === login.password){
                setIsLoggedIn(true);
                setCurrentUser(checkUsername[0]);
                history.push(`/users/home/${checkUsername[0].id}`)
                } else {
                    setIsLoggedIn(false)
                    setError("Please check password!")
                };}
    };


//     async function findCurrentUser() {
//         const response = await fetch(`http://localhost:9393/users/${login.username}`)
//         if (response.status === 401){
//             setError("That user doesn't exist, try again or sign up for an account!")
//         } else  {
//             fetch(`http://localhost:9393/users/${login.username}`)
//             .then((r) => r.json())
//             .then(r => {
//                 if (r.password === login.password){
//                     setIsLoggedIn(true);
//                     setCurrentUser(r);
//                     history.push(`/users/home/${r.id}`)
//                     } else {
//                         setError("The password is incorrect. Please try again!")
//                     };
//                 })
//         }
// }


return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3 style={{color:"red"}}>{error}</h3>
            <label htmlFor="login" value="username">Username: </label>
            <input
                type="text"
                onChange={handleChange}
                value={login.username}
                name="username"
                placeholder="Your username here..."
                autoFocus={true}
            />
            <label htmlFor="login" value="password">Password: </label>
            <input
                type="password"
                onChange={handleChange}
                value={login.password}
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