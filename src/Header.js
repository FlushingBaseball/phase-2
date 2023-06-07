import { NavLink } from "react-router-dom"


function Header({setSignedIn, signedIn}){

        function handleLiClick(){

            setSignedIn((signedIn)=> !signedIn)

                                    }

    return (
        <div>
            <nav>
             <NavLink to="/">Home</NavLink>
            <NavLink to="/userUniverse">User Universe</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to='/sign-In' onClick={handleLiClick}>{signedIn ?" Sign out" : "Sign In"}</NavLink>
            </nav>
         </div>
    )

}

 export default Header