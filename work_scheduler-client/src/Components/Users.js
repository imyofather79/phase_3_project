import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Manager from './Manager';
import Staff from './Staff';


function Users({ users, currentUser, setCurrentUser, handleRemove, editUser }) {

    let isManager = currentUser.is_manager
    // let department = currentUser.department.department
    // console.log(currentUser.department.department)

    return (
        <div>
            <h1>Welcome {currentUser.username} </h1>
            <h3>Name: {currentUser.first_name} {currentUser.last_name} </h3>
            {/* <h3>Department: {department} </h3> */}
            {!!isManager
                ? 
                <Manager 
                users={users}
                currentUser={currentUser}
                editUser={editUser} 
                handleRemove={handleRemove} 
                setCurrentUser={setCurrentUser}
                />
                : <Staff 
                users={users}
                currentUser={currentUser}
                /> 
            }
        </div>
    )
}
export default Users;