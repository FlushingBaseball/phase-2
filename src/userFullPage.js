import {useState, useEffect} from 'react-router-dom'
import { useParams } from "react-router-dom"


function userFullPage(){

    const [user, setUser] = useState(null);
    const { id } = useParams()


    useEffect(() => {
        fetch(`http://localhost:3001/Users/${id}`)
            .then(resp => resp.json())
            .then(returnedUser => setUser(returnedUser))
            .then(console.log(user))
    }, [id])


    if (!user) return <h2>Loading...</h2>

    const { name, username, location } = user



    return (
            <div>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h3>{username}</h3>
            </div>
     )
}


export default userFullPage