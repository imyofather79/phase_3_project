import React, { useState } from 'react';
import { useHistory, Route } from "react-router-dom";

function Registration ({users, setIsLoggedIn, setCurrentUser}) {
 
    const [registerData, setRegisterData] = useState({});
    const [filterByUsername, setFilterByUsername] = useState({});
    const [filterByEmail, setFilterByEmail] = useState({});
    const history = useHistory();
    const [error, setError] = useState(null);
    let username = registerData.username
    let email = registerData.email
    
    console.log(users)

console.log(users.filter((user) => user.username === username))
console.log(users.filter((user) => user.email === email))
console.log(registerData)

    // let checkUsername = users
    //         .filter((user) => user.username === username)
    //         .map((user) => setFilterByUsername(user))
    
    // let checkEmail = users
    //         .filter((user) => user.username === username)
    //         .map((user) => setFilterByUsername(user))
    
    // function authUser(){
    //     if(!!checkUsername || !!checkEmail){
    //         setError("username and/or email has been previously registered, please assign a new username and/or email.")
    //     } else {
    //         postMethod(registerData);
    //     }
    // }

    function handleChange(e){
        setRegisterData((prev) => {
           return {
            ...prev,
            [e.target.name]: e.target.value
            }
        });
    };

    function handleSubmit(e){
        e.preventDefault();
        // console.log(checkUsername)
        // console.log(checkEmail)
        console.log(username)
        console.log(email)
        console.log(filterByUsername)
        console.log(filterByEmail)
        postMethod(registerData)
        // findUsers(registerData);
        setIsLoggedIn(true);
    };

    async function postMethod(){
        let checkUsername = users.filter((user) => user.username === username)
        let checkEmail = users.filter((user) => user.email === email)

        if(checkUsername.username === username || checkEmail.email === email){
            setError("username/email has been previously registered, please assign a new username/email.")
        // } else if() {
        //     setError("email has been previously registered, please assign a new username and/or email.")
        } else {   
        
            if (registerData.password === registerData.password_confirmation){
               await fetch("http://localhost:9393/users/registration", {
                method: "POST",
                headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
                })
                .then((r) => r.json())
                .then(r => {
                console.log(r)
                setCurrentUser(r);
                setRegisterData(r);
                history.push(`/users/home/${r.id}`)
                    
                })} else {
                    setError("Please check password!")
                };}
    };
        
   


















     async function findUsers() {
        console.log(registerData)
        const checkUser = await fetch(`http://localhost:9393/users/${registerData.id}`)
        console.log(checkUser)
        if (checkUser.status === 200){
            setError("username has been previously registered, please assign a new username or email.")
        } else { 
            findEmail(registerData);
        }
    };

    async function findEmail() {
        console.log(registerData)
        console.log(registerData.username)
        const checkUser = await fetch(`http://localhost:9393/users/?email=${registerData.email}`)
        if (checkUser.status === 200){
            setError("email has been previously registered, please assign a new email.")
        } else  {
            postMethod(registerData);
        }
    }

    // async function postMethod(){
    //     console.log(registerData)
    //     if (registerData.password === registerData.password_confirmation){
    //    await fetch("http://localhost:9393/users/registration", {
    //     method: "POST",
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //         },
    //     body: JSON.stringify(registerData),
    //     })
    //     .then((r) => r.json())
    //     .then(r => {
    //         console.log(r)
    //         setCurrentUser(r);
    //         setRegisterData(r);
    //         history.push(`/users/home/${r.id}`)
                
    //         })} else {
    //             setError("Please check password!")
    //         };
    // };
        
    
    // console.log(registerData);
    // console.log(checkEmail)
    // console.log(checkUsername)
    

    return (
        <div>
            {/* {checkUsername} */}
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
                <label>First name: </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.first_name}
                    name="first_name"
                    placeholder="Your first name here..."
                /> 
                <label>Last name: </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.last_name}
                    name="last_name"
                    placeholder="Your last name here..."
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

                <label>Department: </label>
                <select 
                        name="department_id"
                        value={registerData.department_id}
                        onChange={handleChange}
                 >
                        <option hidden>Department</option>
                        <option value={1}>Accounting</option>
                        <option value={2}>Shipping</option>
                        <option value={3}>Operation</option>
                        <option value={4}>Logistics</option>
                        <option value={5}>Retails</option>
                        <option value={6}>Adminstration</option>
                </select>
                <button type="submit">Register</button>
                
            </form>
        
        </div>

    );

}

export default Registration;