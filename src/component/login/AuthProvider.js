import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // const nav = useNavigate();
  const [user, setUser] = useState(null);

    useEffect(() => {
      // Check if a user is already logged in by retrieving the token from local storage
      const islogin = localStorage.getItem('islogin');
      if (islogin) {
        if (islogin) {
          
          logout();
        } else{
            setUser(islogin);
        }
      }
    }, []);

  const login = async (userName, pass, nav) => {
    const config = {
    headers: { "Content-Type": "application/json",
    "Access-Control-Allow-Origin" :"*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Expose-Headers":"*",
    "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Credential": true
   }
   //,    withCredentials: true
};
    axios
      .post(
        "http://localhost:8080/user/login",
        { userName, pass },
        config
      )
      .then((res) => {
        localStorage.setItem("islogin", true);
        Cookies.set("test","test1",{ path: '/' });
        console.log("********************"+Cookies.get("test"))
        console.log(res)
        const token = Cookies.get("token");
        console.log("@@@@@@@@@@"+token)
        setUser(true);
        nav("/pdp");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Failed to login !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  const logout = (nav) => {
    localStorage.removeItem("islogin");
    setUser(null);
    Cookies.remove("test");
    nav("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
