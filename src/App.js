import UserCollection from "./UserCollection";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom"
import HomeSplash from "./HomeSplash";
import NewUser from "./NewUser";
import SignInPage from "./SignInPage";


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
      <Switch>
        <Route exact path="/">
            <HomeSplash />
        </Route>
        <Route path="/userUniverse">
             <UserCollection usersArray={usersArray} />
       </Route>
        <Route path="/sign-up">
          <NewUser />
       </Route>
       <Route path="/sign-In">
         <SignInPage />
       </Route>
      </Switch>
    </div>
  );
}

export default App;
