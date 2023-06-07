import MiniUser from "./MiniUser"
import Search from "./Search"
import NewPost from "./NewPost"
import NewUser from "./NewUser"
import { func } from "prop-types"




function userCollection({usersArray, handleSubmit}) {


  function handleMiniClick(){

    console.log("I Was clicked ")
  }

    return (
      <div> 
        {usersArray.map((user)=>{
          return (
            <MiniUser onClick={handleMiniClick} key={user.id} {...user} />
             )
        })}
        <Search />
        <NewPost />
      </div> 
    )
}

export default userCollection