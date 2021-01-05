import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetch() {
  let [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("Use Effect");
    const URI = "http://localhost:8080/api/v1/";
    axios
      .get(`${URI}/employees`)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h3>All Employees</h3>
      <hr />
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                  <button className="btn btn-outline-danger m-2">Delete</button>
                  <button className="btn btn-outline-primary m-2">Edit</button>
                  <button className="btn btn-outline-info m-2">View</button>
              </td>
            </tr>
          ))}
          </tbody>
      
      </table>
    </div>
  );
}

export default DataFetch;
