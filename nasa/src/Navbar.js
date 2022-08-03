import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>NASA</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="#">About</Link>
                <Link  className="creation" to="/create"><span>New Blog</span></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;