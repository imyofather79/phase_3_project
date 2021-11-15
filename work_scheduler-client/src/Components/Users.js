import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Manager from './Manager';
import Staff from './Staff';


function Users() {
    const [currentUser, setCurrentUser] = useState("");
    const [role, setRole] = useState("");
    // const [error, setError] = useState(null);
    let { id } = useParams();

    useEffect(() => { 
        fetch(`http://localhost:9393/users/home/${id}`)
        .then((r) => r.json())
        .then((json) => {
            setRole(json);
            if(!!json.is_manager){
                console.log(json.is_manager)
                setCurrentUser(json.manager)
                // {<Manager currentUser={currentUser}/>}
                
            } else {
                console.log(json.staff)
                setCurrentUser(json.staff)
            }
        }) 
    }, [])

    // function renderRole(){
    //     if(!!role.is_manager){
    //     <Manager currentUser={currentUser}/>
    //   } else {
    //     <Staff currentUser={currentUser}/>  
    //   }
    // }
    console.log(currentUser)
    // console.log(currentUser.paid_rate)
    // console.log(renderRole(currentUser))

    let isManager = role.is_manager
    // console.log(isManager)


    return (
        <div>
            <h1>Welcome {currentUser.username} </h1>
            <h3>Name: {currentUser.first_name} {currentUser.last_name} </h3>
            <h3>Department: {currentUser.department} </h3>
           <h3>
               {!!isManager
                ? 
                <Manager currentUser={currentUser}/>
                : <Staff currentUser={currentUser}/> 
               }
           </h3>


        </div>
    )
}
export default Users;