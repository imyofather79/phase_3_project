import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from './Signup';


function Registration ({ onAddUser, changeUser}) {
 
    const [registerData, setRegisterData] = useState("");
    const history = useHistory();
    // const [user, setUser] = useState("");
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const url = "http://localhost:9393/users";
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             setUser(json);
    //         } catch (error) {
    //             alert("error", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    function handleChange(e){
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e){
        e.preventDefault();
        findUsers(registerData)
    };

    async function findUsers(currentUser) {
       
        const checkUser = await fetch("http://localhost:9393/registration/validate/:username")
        console.log(checkUser)
        console.log(currentUser)
        if (checkUser.status === 200){
            setError("username or email has been previously registered, please assign a new username or email.")
        } else  {
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
                        if (currentUser.password == currentUser.password_confirmation){
                            onAddUser(registerData);
                            history.push("/registration/signup")
                        } else {
                            setError("Please check password!")
                        };
                    })
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3 style={{color:"red"}}>{error}</h3>
                 <input
                    type="text"
                    onChange={handleChange}
                    value={registerData.username}
                    name="username"
                    placeholder="Create a username here..."
                />
                <br/>
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