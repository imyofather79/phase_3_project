import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Registration ({users, setIsLoggedIn, setCurrentUser}) {
 
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const [error, setError] = useState(null);

    

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
        postMethod(registerData)
        setIsLoggedIn(true);
    };

    async function postMethod(){
        let checkUsername = users.filter((user) => user.username === registerData.username).toString()
        let checkEmail = users.filter((user) => user.email === registerData.email).toString()

        if(!!checkUsername|| !!checkEmail){
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