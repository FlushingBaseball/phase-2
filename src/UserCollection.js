import MiniUser from "./MiniUser"
import Search from "./Search"

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