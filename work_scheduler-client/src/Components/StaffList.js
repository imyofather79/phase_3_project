import React, { useState, useEffect } from 'react';
import {  useHistory } from "react-router-dom";


function StaffList({ u, handleRemove }) {
    const [currentStaff, setCurrentStaff] = useState({})
    const history = useHistory();

    function handleChange(e){
        setCurrentStaff(() => {
            return {
            ...u,
            [e.target.name]: e.target.value
            }
        });
    };

    function handleSubmit(e){
        e.preventDefault();
        console.log(u.id)
        fetch(`http://localhost:9393/users/${u.id}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                paid_rate: currentStaff.paid_rate
            }),
          })
            .then((r) => r.json())
            .then((r) => {
                setCurrentStaff(r); 
            });
    };

    function handleDeleteStaff(e){
        e.preventDefault();
        fetch(`http://localhost:9393/users/home/${u.id}`, {
          method: "DELETE",
          })
              .then((r) => r.json())
              .then(() => (
                handleRemove(u)
          ),
            history.push("/")

          );
      }
      console.log(u.id)

  return (
    <div>
            <form onSubmit={handleSubmit}>
                <label>Paid rate for {u.first_name} {u.last_name}</label>
                <br/>
                <input
                    type="text"
                    onChange={handleChange}
                    value={currentStaff.paid_rate}
                    name="paid_rate"
                />
                <button type="submit">Update</button>
                <button type="submit" onClick={handleDeleteStaff}>Delete Staff</button>
                </form>
    </div>
  )
}

export default StaffList;