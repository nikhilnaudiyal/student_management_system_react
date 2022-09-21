import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [student, setUser] = useState({
            firstName: '',
            middleName: '',
            lastName: '',
            sid : '',
            branchCode: '',
            attendance: '',
            rollNumber: '',
  });

  const {firstName,middleName,lastName,sid,branchCode,attendance,rollNumber } = student;

  const onInputChange = (e) => {
    setUser({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/student/info/update/${id}`, student);
    navigate("/display");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/student/info/find/${id}`);
    setUser(result.data);
    console.log(result);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Middle Name"
                name="middleName"
                value={middleName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="branchCode" className="form-label">
                branch code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter branch code"
                name="branchCode"
                value={branchCode}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="attendance" className="form-label">
                attendance
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter attendance"
                name="attendance"
                value={attendance}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="rollNumber" className="form-label">
                Roll Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Roll Number"
                name="rollNumber"
                value={rollNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}