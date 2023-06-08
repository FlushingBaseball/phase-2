import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"


function UserFullPage(){

    const [user, setUser] = useState(null);
    const { id } = useParams()


    useEffect(() => {
        fetch(`http://localhost:3001/Users/${id}`)
            .then(resp => resp.json())
            .then(returnedUser => setUser(returnedUser))
    }, [id])


    if (!user) return <h2>Loading...</h2>

    const { name, username, location, profile_picture, age, hobbies, pictures} = user
  
console.log(user.profile_picture)


    return (
        <div>

            <div className='container'>
             <div className='profilePicContainer'>
                <img className='profilePic' src={require=(profile_picture)} alt=" Profie Pic"></img>
             </div>
             <div className='userInfo'>
                <h1>{username}</h1>
                <h3>Location:{location}</h3>
                <h3>Name:{name}</h3>
                <h3>Age:{age}</h3>
             </div>
            </div>

        <div className='postsArea' >
            <h2>{username}'s Posts</h2>
            {user.posts.map((post, index)=>{
                return(<h5 key={index}>{post}</h5>)
            })}
        </div>

            <div className='aboutMe'>
                <h3>About Me:</h3>
                <h5>My Hobbies are: {hobbies.map((hobby)=>{return (
                    <span> {hobby} ,</span>
                )})}</h5>

            </div>
            <div className='picturesArea'>
                <h3>My Pics:</h3>
                <span> {pictures.map((pic)=>{return (
                    <img src={pic}></img>
                )})}</span>

            </div>



        <div>

        </div>




        </div>
     )
}


export default UserFullPage