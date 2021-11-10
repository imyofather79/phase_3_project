import React from 'react'
import { Link, Route, Switch, useParams, useHistory } from "react-router-dom";

 function UsersList({users}) {

    const renderUsers = Object.keys(users).map((userID) => (
        <li key={userID}>
          <Link to={`/users/home/${userID}`}>{users[userID].username}</Link>
        </li>
      ));

    return (
        <div>
           <ul>{renderUsers}</ul>
        </div>
    )
}

export default UsersList;