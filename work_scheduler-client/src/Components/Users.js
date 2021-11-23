import React from 'react';
import Manager from './Manager';
import Staff from './Staff';


function Users({ users, currentUser, setCurrentUser, handleRemove }) {
    let isManager = currentUser.is_manager

    return (
        <div>
            <h1>Welcome {currentUser.username} </h1>
            <h3>Name: {currentUser.first_name} {currentUser.last_name} </h3>
            {!!isManager
                ? 
                <Manager 
                users={users}
                currentUser={currentUser}
                handleRemove={handleRemove} 
                setCurrentUser={setCurrentUser}
                />
                : <Staff 
                currentUser={currentUser}
                /> 
            }
        </div>
    )
}
export default Users;