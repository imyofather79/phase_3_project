import React, { useState, useEffect } from 'react';
import DepManagerList from './DepManagerList';

function Department({departments, users, setDepartments}) {
console.log(departments)
console.log(users)

  return (
    <div>
      <p>Departments</p>
      {departments.map(d => <DepManagerList users={users} department={d} departments={departments} setDepartments={setDepartments}/>)}
    </div>
  );
}

export default Department;