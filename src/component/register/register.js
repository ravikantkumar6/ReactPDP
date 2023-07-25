import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div id="register-form-wrap">
      <div>
        <h1>User Registration</h1>
      </div>

      <form id="register-form">
        <label className="label">Name</label>
        <input className="input" type="text" />

        <label className="label">Email</label>
        <input className="input" type="email" />

        <label className="label">Password</label>
        <input className="input" type="password" />

        <p>
          <input type="submit" id="register" value="Register" />
        </p>
        <div >
        <p>
          <Link to="/">Login</Link>
        </p>
      </div>
      
      </form>
    </div>
  );
};

export default Register;
