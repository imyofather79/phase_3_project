import React from 'react';
import { Link, Route, Switch, useParams, useRouteMatch, useHistory } from "react-router-dom";
import UsersList from './Home';
import Manager from './Manager';
import Staff from './Staff';


function Users({ users }) {
    console.log(users)
    const match = useRouteMatch();
    console.log(match)
    console.log(match.url)
    

    const params = useParams();
    console.log(params)
    function whichAccount(users){

    }


    return (
        <div>
            <h1>User: ${users.username}</h1>


            <UsersList users={users}/>
            <Route path={`${match.url}/:username`}>
                <Manager />
            </ Route>
        </div>
    )
}
export default Users;