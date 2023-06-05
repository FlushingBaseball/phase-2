import MiniUser from "./MiniUser"
import Search from "./Search"
import NewPost from "./NewPost"
import NewUser from "./NewUser"

function userCollection() {
    return (
      <div> 
        <MiniUser />
        <Search />
        <NewUser />
        <NewPost />
      </div> 
    )
}
export default userCollection