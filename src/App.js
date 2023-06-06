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



  return (
    <div className="App">
        <Header signedIn={signedIn} setSignedIn={setSignedIn}/>
        <UserCollection usersArray={usersArray} />
    </div>
  );
}

export default App;
