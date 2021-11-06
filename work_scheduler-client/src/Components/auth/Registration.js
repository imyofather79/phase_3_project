import React, { useState } from 'react';
// import {userHistory} from "react-router-dom";


function Registration ({sendToManagers, sendToStaffs}) {

    const [registration, setRegistration] = useState({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            is_manager: false,
            registrationErrors: ""
        }
    );
    const [checked, setChecked] = useState(false);


    function handleChecked(){
        setChecked(!checked)
    };

    function handleChange(e){
        setRegistration({
            ...registration,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        
        if (registration.password === registration.password_confirmation && regist && registration.is_manager){
            sendToManagers();
        } else if (registration.password === registration.password_confirmation && !registration.is_manager){
            sendToStaffs();
        } else {
            alert("Please check your inputs")
        }
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={registration.first_name}
                    name="First Name"
                    placeholder="Your first name here..."
                />
                <input
                    type="text"
                    onChange={handleChange}
                    value={registration.last_name}
                    name="Last Name"
                    placeholder="Your last name here..."
                />
                <input
                    type="email"
                    onChange={handleChange}
                    value={registration.email}
                    name="Email"
                    placeholder="Your email here..."
                />
                <input
                    type="password"
                    onChange={handleChange}
                    value={registration.password}
                    name="Password"
                    placeholder="Your password here..."
                />
                <input
                    type="password"
                    onChange={handleChange}
                    value={registration.password_confirmation}
                    name="Password Confirmation"
                    placeholder="Re-enter your password here..."
                />
                <input
                    typt="checkbox"
                    onChange={handleChecked}
                    value={registration.is_manager}
                    name="Is Manager?"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );

}

export default Registration;