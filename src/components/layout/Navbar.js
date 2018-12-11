import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'


const Navbar = ()=> {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">GRE Dictionary</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#gre-navbar" aria-controls="gre-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="gre-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/#" className="nav-link" >about</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <NavLink to="/magoosh" className="nav-link" >Magoosh</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/#" className="nav-link disabled">Barron</NavLink>
              </li>
              <li className="nav-item mr-5">
                <NavLink to="/#" className="nav-link disabled">Kaplan</NavLink>
              </li>
              <SignedOutLinks />
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;