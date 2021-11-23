import React from 'react';

function Staff({ currentUser }) {


  return (
    <div>
 
      <h2>Staff's Dashboard</h2>
      <p>Your paid rate: {currentUser.paid_rate}</p>
    </div>
  );
}

export default Staff;