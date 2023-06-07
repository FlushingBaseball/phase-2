import MiniUser from "./MiniUser"
import Search from "./Search"





function userCollection({usersArray}) {


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
      </div> 
    )
}

export default userCollection