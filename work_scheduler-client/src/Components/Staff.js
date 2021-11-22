import React, { useState, useEffect } from 'react';

function Staff({ users, currentUser }) {
  console.log(currentUser)
  console.log(users)

  return (
    <div>
 
      <h2>Staff's Dashboard</h2>
      <p>Your paid rate: {currentUser.paid_rate}</p>
    </div>
  );
}

export default Staff;