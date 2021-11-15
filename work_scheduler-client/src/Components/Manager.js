import React, { useState, useEffect } from 'react';


function Manager({ currentUser }) {
  const [manager, setManager] = useState("")
  let userId = currentUser.user_id
 
  useEffect(() => { 
    const fetchProducts = async () => {
    await fetch(`http://localhost:9393/managers/${userId}`)
    .then((r) => r.json())
    .then((json) => {
        setManager(json);
    })
    }
      fetchProducts();
    }, [userId])



const showStaffs = async () => { 
  const staffs = manager.staffs.map((s) => {
    <h3>name: {s.first_name} {s.last_name}</h3>;
    <h3>department: {s.department}</h3>;
    <h3>paid_rate: {s.paid_rate}</h3>;
    
  });
  return staffs;
}
  console.log(showStaffs)

  function show(){
    <p>"1"</p>
    // return showStaffs;
    // return <p>Object.values({manager.staffs})</p>
  }

  return (
    <div>
      {/* <h2>Manager Control Center</h2>
      <p>{showStaffs}</p> */}
    </div>
  );
}

export default Manager;