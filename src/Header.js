function Header({setSignedIn, signedIn}){

        function handleLiClick(){

            setSignedIn((signedIn)=> !signedIn)

                                    }

    return (
        <div>
            <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">User Universe</a></li>
                <li><a href="#">idk yet</a></li>
                <li onClick={handleLiClick} ><a href="#">{signedIn ?" Sign out" : "Sign In"}</a></li>
           </ul>
        </div>
    )

}

 export default Header