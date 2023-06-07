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

    const { name, username, location, profile_picture} = user
  
console.log(user)


    return (
            <div>
                <h1>{username}</h1>
                <h3>{location}</h3>
                <h3>{name}</h3>
                <img alt=" Profie Pic" src={profile_picture}></img>
            </div>
     )
}


export default UserFullPage