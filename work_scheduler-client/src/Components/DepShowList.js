import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"


function DepShowList() {

    const [currentDep, setCurrentDep] = useState("");
    const {department} = useParams()

    useEffect(() => { 
        fetch(`http://localhost:9393/departments/${department}`)
        .then((r) => r.json())
        .then((json) => {
          let eachUser = json.users.map((u) => {
                    let isManager = u.is_manager
                    if(!!isManager){
                      return <h2>Manager: {u.first_name} {u.last_name}</h2> 
                      
                    } else {
                        return <h3>Staff: {u.first_name} {u.last_name}</h3>
                    }
                  });
                  return setCurrentDep(eachUser)
        }) 
      }, [])

      console.log(currentDep)

  
    return (
        <div>
            <h1>{department} Team Members</h1>
            {currentDep}
                
        </div>
    )
}

export default DepShowList;