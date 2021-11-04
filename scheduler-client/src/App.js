import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Components/Home";


function App() {
  const [] = useState([]);
  

  useEffect(() => {
    fetch("")
    .then((r) => r.json())
    .then()
  }, [])


  return (
    <div>
        <NavBar />
    </div>
  );
}

export default App;