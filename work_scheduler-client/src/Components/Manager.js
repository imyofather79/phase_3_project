import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import StaffList from './StaffList';

function Manager({ users, currentUser, setCurrentUser, handleRemove, editUser  }) {
    console.log(currentUser)
    console.log(users)
    const [editStaff, setEditStaff] = useState({});
    const [error, setError] = useState(null);
    const {id} = useParams()
    const history = useHistory();
    const depManager = currentUser.department_id
    console.log(depManager)
    console.log(id)
    console.log(editStaff)


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

    let filteredUser = users.filter(function (user){
        return user.department_id === depManager
          
    })
    console.log(filteredUser)
    

  return (
    <div>
      <h2>Manager Control Center</h2>
      {filteredUser.map(u => 
      <StaffList 
      u={u} 
      users={users}
      currentUser={currentUser}
      editUser={editUser} 
      handleRemove={handleRemove} 
      setCurrentUser={setCurrentUser}
      editStaff={editStaff}
      setEditStaff={setEditStaff}
      depManager={depManager}
      />
      )}
      <h1>Account Removal</h1>
      <h2>Warning</h2>
      <button type="submit" onClick={handleDeleteSelf}>Delete Account</button>
    </div>
  );
}

export default Manager;