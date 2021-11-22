import React from 'react'
import { NavLink } from "react-router-dom";

 function DepManagerList({users, department, departments, setDepartments}) {

  function showManager(){
    let depManager = department.users.map((u) => {
      let isManager = u.is_manager
      if(!!isManager){
        return `${u.first_name} ${u.last_name}`
      }
    });
    return depManager
  }
  
  console.log(department.users.map((u) => {
    let isManager = u.is_manager
    if(!!isManager){
      return `${u.first_name} ${u.last_name}`
    }
  }))

  
    return (
        <div>
            <NavLink to={`/departments/${department.department}`}>{department.department}</NavLink> - {department.department} - {showManager()}
        </div>
    )
}

export default DepManagerList;