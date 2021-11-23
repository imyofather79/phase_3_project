import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import StaffList from './StaffList';

function Manager({ users, currentUser, handleRemove }) {
    const {id} = useParams()
    const history = useHistory();
    const depManager = currentUser.department_id


    function handleDeleteSelf(e){
      e.preventDefault();
      console.log(id)
      fetch(`http://localhost:9393/users/home/${id}`, {
        method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => (
              handleRemove(currentUser)
        ),
        history.push("/")
        );
    }

    let filteredUsers = users.filter(function (user){
      console.log(user.department_id)
        return user.department_id === depManager 
    })
    console.log(filteredUsers)
    

  return (
    <div>
      <h2>Manager Control Center</h2>
      {filteredUsers.map(u => 
      <StaffList 
      u={u} 
      handleRemove={handleRemove} 
      />
      )}
      <h1>Account Removal</h1>
      <h2>Warning</h2>
      <button type="submit" onClick={handleDeleteSelf}>Delete Account</button>
    </div>
  );
}

export default Manager;