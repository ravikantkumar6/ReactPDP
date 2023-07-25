import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../login/AuthProvider";

const Login = () => {
  const { login } = useAuth();
  const [userName, setLogin] = useState();
  const [pass, setPass] = useState();
  const nav = useNavigate();
  
  const handleLogin = () => {
    login(userName, pass, nav);
  };

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("handleSubmit");

  //   axios
  //     .post(
  //       "http://localhost:8080/user/login",{userName,pass},
  //       {
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //       }

  //     )
  //     .then((res) => {
  //       localStorage.setItem('islogin', true);
  //       nav("/pdp")
  //     })
  //     .catch((error)=>{
  //       toast.error('Failed to login !', {
  //         position: toast.POSITION.BOTTOM_RIGHT
  //     });
  //     })
  // };
  return (
    <div id="login-form-wrap">
      <h2>Login</h2>

      <ToastContainer />
      <p>
        <input
          type="text"
          id="username"
          // name="username"
          value={userName}
          placeholder="Username"
          required
          onChange={(e) => setLogin(e.target.value)}
        />
        {console.log(userName)}
        <i className="validation">
          <span></span>
          <span></span>
        </i>
      </p>
      <p>
        <input
          type="password"
          id="pass"
          // name="pass"
          value={pass}
          placeholder="pass"
          required
          onChange={(e) => setPass(e.target.value)}
        />
        <i className="validation">
          <span></span>
          <span></span>
        </i>
      </p>
      <p>
        <input type="submit" id="login" value="Login" onClick={handleLogin} />
      </p>
      <div id="create-account-wrap">
        <p>
          Not a member? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
