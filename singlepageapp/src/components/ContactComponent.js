import React, { Component } from "react";

export class ContactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Raj",
      mobile: "",
      email: "",
    };

    this.changeUsernameHandler=this.changeUsernameHandler.bind(this)
    this.stopSubmission=this.stopSubmission.bind(this)
  }

  changeUsernameHandler=(e)=>
  {
      this.setState({
        username:e.target.value
      })
  }

  stopSubmission=(e)=>
  {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className="container mt-2">
          <h2>Contact US</h2>

          <form method="POST" onSubmit={this.stopSubmission}>
            <div>
              <label>Username</label>
              <input
                value={this.state.username}
                name="username"
                className="form-control"
                onChange={this.changeUsernameHandler}
              />
            </div>
            <div>
              <label>Mobile</label>
              <input
                value={this.state.mobile}
                name="mobile"
                className="form-control"
             
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                value={this.state.email}
                className="form-control"
               
              />
            </div>
            <button className="btn btn-outline-primary mt-2">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
