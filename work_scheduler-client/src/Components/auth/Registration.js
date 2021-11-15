import React, { useState } from 'react';
import { useHistory, Route } from "react-router-dom";
import Signup from './Signup';

function Registration () {
 
    const [registerData, setRegisterData] = useState("");
    const history = useHistory();
    const [error, setError] = useState(null);

    
    function handleChange(e){
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e){
        e.preventDefault();
        findUsers(registerData)
        console.log(registerData)
        // postMethod(registerData);
    };

     async function findUsers() {
        // console.log(currentUser)
        console.log(registerData)
        const checkUser = await fetch(`http://localhost:9393/registration/${registerData.username}`)
        console.log(checkUser)
        if (checkUser.status === 200){
            setError("username has been previously registered, please assign a new username or email.")
        } else { 
            // postMethod(registerData);
            findEmail(registerData);
        }
    };

    async function findEmail() {
        console.log(registerData)
        console.log(registerData.username)
        const checkUser = await fetch(`http://localhost:9393/registration/email/?email=${registerData.email}`)
        if (checkUser.status === 200){
            setError("email has been previously registered, please assign a new email.")
        } else  {
            postMethod(registerData);
        }
    }

    function postMethod(){
        console.log(registerData)
        if (registerData.password === registerData.password_confirmation){
        fetch("http://localhost:9393/registration", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            },
        body: JSON.stringify(registerData),
        })
        .then((r) => r.json())
        .then(r => {
                setRegisterData(r);
                history.push("/registration/signup")
                
            })} else {
        setError("Please check password!")
            };
    };
        
    let prevData = registerData.username;
    console.log(prevData);
    
    // async function findUsers(currentUser) {
    //     const checkUser = await fetch(`http://localhost:9393/registration/${currentUser.username}`)
    //     if (checkUser.status == 200){
    //         setError("username has been previously registered, please assign a new username or email.")
    //     } else  {
    //        await fetch("http://localhost:9393/registration", {
    //             method: "POST",
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json",
    //                 },
    //             body: JSON.stringify(registerData),
    //             })
    //             .then((r) => r.json())
    //             .then(registerData => {
    //                 if (currentUser.password == currentUser.password_confirmation){
    //                     setRegisterData(registerData);
    //                     console.log(registerData);
                  
    //                     // history.push("/registration/signup")
    //                 } else {
    //                     setError("Please check password!")
    //                 };
    //                 });
    //     }
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3 style={{color:"red"}}>{error}</h3>
            <label>Username: </label>
                 <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.username}
                    name="username"
                    placeholder="Create a username here..."
                />
                <label>Email: </label>
                <input
                    type="email"
                    onChange={handleChange}
                    value={registerData.email}
                    name="email"
                    placeholder="Your email here..."
                />
                <br />
                <label>Password: </label>
                <input
                    type="password"
                    onChange={handleChange}
                    value={registerData.password}
                    name="password"
                    placeholder="Your password here..."
                />
                <label>Re-type Password: </label>
                <input
                    type="password"
                    onChange={handleChange}
                    value={registerData.password_confirmation}
                    name="password_confirmation"
                    placeholder="Re-enter your password here..."
                />
                <br />
                <label>Position: </label>
                <select
                    type="checkbox"
                    onChange={handleChange}
                    value={registerData.is_manager}
                    name="is_manager"
                >
                <option hidden>Role</option>
                <option value={true}>Manager</option>
                <option value={false}>Staff</option>
                </select>
                
                <button type="submit">Register</button>
                
            </form>

            <Route path="/registration/signup">
              <Signup registerEntry={registerData}/>
            </Route>
        
        </div>

    );

}

export default Registration;