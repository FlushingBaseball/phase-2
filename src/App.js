import UserCollection from "./UserCollection";
import { useEffect, useState } from "react";



function App() {
  
const [usersArray, setUsersArray] = useState([]);
const [Search, setSearch] = useState('');


useEffect(()=>{

  fetch("http://localhost:3001/Users")
  .then(resp => resp.json())
  .then(userResponse => setUsersArray(userResponse))
  
  
  
  
},[])



  return (
    <div className="App">
        <p>HELLO FROM PHASE-2</p>
        <UserCollection usersArray={usersArray} />
    </div>
  );
}

export default App;
