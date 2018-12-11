import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-4" />
        <div className="col-lg-4 col-md-4">
          <div className="card bg-light mt-4">
          <h4 className="text-center mt-4"><strong>Sign Up</strong></h4>
            <div className="card-body py-5">
              <form className="px-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div class="row">
				            <div class="col-lg">
                      <input type="text" className="form-control" id="firstName" placeholder="First Name" required="required" onChange={this.handleChange} />
                    </div>
				            <div class="col-lg">
                      <input type="text" className="form-control" id="lastName" placeholder="Last Name" required="required" onChange={this.handleChange} />
                    </div>
			            </div>
                </div>
                <div className="form-group">
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email"  required="required" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Password"  required="required" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Confirm Password"  required="required" onChange={this.handleChange}/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="checkbox" />
                  <label className="form-check-label" htmlFor="checkbox">I accept the <Link to="#">Terms of Use</Link> & <Link to="#">Privacy Policy</Link></label>
                </div>
                <button type="submit" className="btn btn-success float-right">Create An Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;