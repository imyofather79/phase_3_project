import React, { useState, useEffect } from 'react';

function Staff({ currentUser }) {
  const [staffs, setStaffs] = useState("")
  let userId = currentUser.user_id


  useEffect(() => { 
    const fetchProducts = async () => {
    await fetch(`http://localhost:9393/staffs/${userId}`)
    .then((r) => r.json())
    .then((json) => {
        setStaffs(json);
    })
    }
      fetchProducts();
    }, [userId])


  return (
    <div>
 
      {/* <h3>Staff's Dashboard</h3> */}

    </div>
  );
}

export default Staff;