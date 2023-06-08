import { NavLink } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/userUniverse">User Universe</NavLink>
        <NavLink to="/sign-Up">Sign Up</NavLink>
        <NavLink to="/sign-In">Sign In</NavLink>
        <NavLink to="/Search">Search</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
}

export default Header;
