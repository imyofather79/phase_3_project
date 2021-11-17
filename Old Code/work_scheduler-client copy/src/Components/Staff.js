import React, { useState, useEffect } from 'react';

function Staff({ currentUser, users }) {
  const [staffs, setStaffs] = useState("")


  useEffect(() => { 
    const fetchProducts = async () => {
    await fetch(`http://localhost:9393/staffs/${users.id}`)
    .then((r) => r.json())
    .then((json) => {
        setStaffs(json);
    })
    }
      fetchProducts();
    }, [])


  return (
    <div>
 
      {/* <h3>Staff's Dashboard</h3> */}

    </div>
  );
}

export default Staff;