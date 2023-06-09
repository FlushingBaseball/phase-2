import MiniUser from "./MiniUser"





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
      </div> 
    )
}

export default userCollection

