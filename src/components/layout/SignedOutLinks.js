import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () =>  {
    return ( 
         <ul className="navbar-nav ">
            <li className="nav-item mr-3">
                <NavLink to="/signin" className="nav-link">Login<i className="fas fa-sign-in-alt ml-1"></i></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/signup" className="nav-link">Signup<i className="fas fa-user-plus ml-1"></i></NavLink>
            </li>
        </ul>
    );
}
 
export default SignedOutLinks;
