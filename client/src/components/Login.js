import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/login.css";
import Axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ user: "", password: "" });
  const [details, setDetails] = useContext(UserContext);
  
  useEffect(()=>{
    if(details.token){
      navigate(`/${details.user}`)
    }
  },[])
  //handling changes on input using state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  //User Authentication 
  const login = async (e) => {
    e.preventDefault();
    if (!info.user || !info.password) {
      toast.warn("Fill all the credentials", {
        theme: "light",
      });

      return;
    }
    try {
      const res = await Axios.post("http://localhost:8000/login", {
        user: info.user,
        password: info.password,
      });

      if (res.status === 206) {
        toast.warn("Credentials do not match", {
          theme: "light",
        });
        return;
      }
      if (res.status === 200) {
        toast.info("Successfully Logged in", {
          theme: "light",
          autoClose: 500,
        });
        navigate(`/${info.user}`);
        await setDetails({
          user: res.data.user,
          token: res.data.id,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="hero_container">
      <Navbar />
      <div className="login_wrap">
        <div className="login_container">
          <h3>Login</h3>
          <form>
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              name="user"
            ></input>
            <input
              type="text"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            ></input>
            <button className="btn" onClick={login}>
              Login
            </button>
          </form>
          <p>
            <h5>Don't have account?</h5>
            <NavLink to={"/signup"} >
              <h5 className="txt">Sign up</h5>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
