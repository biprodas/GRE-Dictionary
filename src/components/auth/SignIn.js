import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class SignIn extends Component {
  state = {
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
        <div className="col-md-4" />
        <div className="col-md-4">
          <div className="card bg-light mt-4 ml-5 shadow-sm" Style="width:70%">
          <h4 className="text-center mt-3"><strong>Sign In</strong></h4>
            <div className="card-body">
              <form className="px-4 py-2" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="checkbox" />
                  <label className="form-check-label" htmlFor="checkbox">Remember me</label>
                </div>
                <button type="submit" className="btn btn-success float-right">Submit</button>
              </form>
              
            </div>
            <Link to="#" className="pb-4 ml-4">Forgot password?</Link>
          </div>
        </div>
        <div className="col-md-4" />
      </div>
    )
  }
}

export default SignIn