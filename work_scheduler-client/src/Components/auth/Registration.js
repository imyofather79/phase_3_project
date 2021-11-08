import React, { useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from './Signup';


function Registration ({ onAddUser}) {

    const [registerData, setRegisterData] = useState(
         {
            // first_name: "",
            // last_name: "",
            // email: "",
            // password: "",
            // password_confirmation: "",
            // is_manager: null,
            // registrationErrors: ""
         }
    );
    const history = useHistory();
    // const [checked, setChecked] = useState(false);


    // function handleChecked(){
    //     setChecked(!checked)
    // };

    function handleChange(e){
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9393/registration", {
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
                history.push("/registration/signup")
                )
        // if (registerData.is_manager){
        //     sendToManagers(registerData);
        // } else {
        //     sendToStaffs(registerData);
        // } 
        // if (registerData.password === registerData.password_confirmation && registerData.is_manager){
        //     sendToManagers();
        // } else if (registerData.password === registerData.password_confirmation && !registerData.is_manager){
        //     sendToStaffs();
        // } else {
        //     alert("Please check your inputs")
        // }
    }

    console.log(registerData)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <label>firstname</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.first_name}
                    name="first_name"
                    placeholder="Your first name here..."
                /> 
                <br /> */}
                {/* <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.last_name}
                    name="last_name"
                    placeholder="Your last name here..."
                />
                <br /> */}
                 {/* <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.username}
                    name="userame"
                    placeholder="Create a username here..."
                /> */}
                <input
                    type="email"
                    onChange={handleChange}
                    value={registerData.email}
                    name="email"
                    placeholder="Your email here..."
                />
                <br />
                <input
                    type="password"
                    onChange={handleChange}
                    value={registerData.password}
                    name="password"
                    placeholder="Your password here..."
                />
                <br />
                <input
                    type="password"
                    onChange={handleChange}
                    value={registerData.password_confirmation}
                    name="password_confirmation"
                    placeholder="Re-enter your password here..."
                />
                <br />
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
            <Switch>
                <Route path="/registration/signup">
                <Signup 
                    handleChange={handleChange}
                    onAddUser={onAddUser}
                    // sendToManagers={sendToManagers} 
                    // sendToStaffs={sendToStaffs} 
                />  
                </Route>
            </Switch>
        </div>

        
    );

}

export default Registration;