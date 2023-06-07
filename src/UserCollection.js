import MiniUser from "./MiniUser"
import Search from "./Search"
import NewPost from "./NewPost"
import NewUser from "./NewUser"
import { func } from "prop-types"


function userCollection({usersArray}) {

  function handleMiniClick(){

    console.log("I Was clicked ")

  }


=======
function userCollection({usersArray, handleSubmit}) {

    return (
      <div> 
        {usersArray.map((user)=>{
          return (
            <MiniUser onClick={handleMiniClick} key={user.id} {...user} />
             )
        })}
        <Search />
        <NewUser handleSubmit={handleSubmit}/>
        <NewPost />
      </div> 
    )
}
export default userCollection