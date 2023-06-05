import MiniUser from "./MiniUser"
import Search from "./Search"
import NewPost from "./NewPost"
import NewUser from "./NewUser"

function userCollection({usersArray}) {
    return (
      <div> 
        {usersArray.map((user)=>{
          return (
            <MiniUser key={user.id} {...user} />
             )
        })}
        <Search />
        <NewUser />
        <NewPost />
      </div> 
    )
}
export default userCollection