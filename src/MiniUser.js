import { Link } from "react-router-dom";



function MiniUser({profile_picture, username, id, location}) {
    return (
        <div className="Mini-User">

            <h3 className="name">{username}</h3>
            <img alt="Mini User Profie Pic" src={profile_picture}></img>
            <h5 className="location" >{location}</h5>
            <Link to={`/UserUniverse/${id}`}>see more</Link>

        </div>
    )
}
export default MiniUser






 






// "id": 1,
// "username": "john",
// "password": "pass",
// "name": "John Smith",
// "location": "New York",
// "posts": [
//   "Hello, world!",
//   "Having a great day!",
//   "Feeling blessed."
// ],
// "favorite_songs": [
//   "Imagine - John Lennon",
//   "Shape of You - Ed Sheeran",
//   "Don't Stop Believin' - Journey"
// ],
// "age": 30,
// "hobbies": ["reading", "playing guitar"],
// "profile_picture": "../flatSpaceImages/user1/1.jpg",  
// "pictures": ["pic1.jpg", "pic2.jpg", "pic3.jpg"]
// },