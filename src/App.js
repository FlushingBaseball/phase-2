import UserCollection from "./UserCollection";
import Header from "./Header";
import { useEffect, useState } from "react";



function App() {
  
const [usersArray, setUsersArray] = useState([]);
const [Search, setSearch] = useState('');
const [signedIn, setSignedIn] = useState(false);


useEffect(()=>{

  fetch("http://localhost:3001/Users")
  .then(resp => resp.json())
  .then(userResponse => setUsersArray(userResponse))
  
  
  
  
},[])
function handleSubmit(newUser) {
setUsersArray(prev => [...prev, newUser])
}



  return (
    <div className="App">
        <Header signedIn={signedIn} setSignedIn={setSignedIn}/>
        <UserCollection usersArray={usersArray} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
