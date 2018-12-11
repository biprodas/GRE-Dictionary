import React from 'react'
import {NavLink} from 'react-router-dom'

const Feature = () =>  {
    return ( 
      <div className="col-md-2">
        <div className="card mt-5 ">
          <div className="card-body">
            <div className="list-group-flush ">
              <NavLink to="#" className="list-group-item list-group-item-action">Group Word</NavLink>
              <NavLink to="#" className="list-group-item list-group-item-action">Abstruse Word</NavLink>
              <NavLink to="#" className="list-group-item list-group-item-action">Flash Card</NavLink>
              <NavLink to="#" className="list-group-item list-group-item-action">Mnemonics</NavLink>
              <NavLink to="#" className="list-group-item list-group-item-action">About</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Feature;