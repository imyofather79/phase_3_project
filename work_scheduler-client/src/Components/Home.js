import React from 'react'
import { Redirect } from 'react-router';

 function Home( {isLoggedIn} ) {
  

    // if(!isLoggedIn) return <Redirect to="/" />

    return (
        <div>
            <h1>Welcome to my portal!</h1>
        </div>
    )
}

export default Home;