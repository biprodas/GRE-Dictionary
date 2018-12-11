import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const SignedInLinks = () =>  {
    return ( 
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user mr-2"></i>Biprodas</a>
        <div className="dropdown-menu" aria-labelledby="dropdown01">
          <NavLink to="/profile" className="dropdown-item"><i className="fas fa-user mr-1"></i>My Profile</NavLink>
          <NavLink to="/setting" className="dropdown-item"><i className="fas fa-cog mr-1"></i>Setting</NavLink>
          <Link to="/" class="dropdown-item"><i className="fas fa-sign-out-alt mr-1"></i>Log out</Link>
        </div>
      </li>
    );
}
 
export default SignedInLinks;