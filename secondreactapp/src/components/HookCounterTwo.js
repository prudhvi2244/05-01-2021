import React, { useState } from "react";
import axios from "axios";

function HookCounterTwo() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  let stopSubmission = (e) => {
    const URI = "http://localhost:8080/api/v1/employees";
    e.preventDefault();
    let employee = {
      firstName: name.firstName,
      lastName: name.lastName,
      emailId: name.email,
    };
    console.log(employee);
    axios
      .post(URI, employee)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    setName({firstName:'',lastName:'',email:''})

  };

  return (
    <div>
      <h3>Registration Form</h3>

      <form method="POST" onSubmit={stopSubmission}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={name.lastName}
            className="form-control"
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="text"
            value={name.email}
            className="form-control"
            onChange={(e) => setName({ ...name, email: e.target.value })}
          />
        </div>
        <button className="btn btn-outline-info mt-3 ">Register</button>
      </form>
    </div>
  );
}

export default HookCounterTwo;
