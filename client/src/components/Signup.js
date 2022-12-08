import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import "../css/login.css";
import Axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import Loader from "../pages/Loader";
export default function Signup() {
  const [details] = useContext(UserContext);
  const [info, setInfo] = useState({ user: "", password: "" });
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (details.token) {
      navigate(`/${details.user}`);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const signup = async (e) => {
    setLoader(true);
    e.preventDefault();
    if (!info.user || !info.password) {
      toast.warn("Fill all the credentials", {
        theme: "light",
      });
      setLoader(false);
      return;
    }
    try {
      const res = await Axios.post("https://codify.cyclic.app/signup", {
        user: info.user,
        password: info.password,
      });

      if (res.status === 206) {
        toast.warn("User already exist", {
          theme: "light",
        });
        setLoader(false);
        return;
        
      }

      if (res.status === 200) {
        toast.info("Successfully Signed Up", {
          theme: "light",
        });
        setLoader(false);
        navigate("/login");
        return;
      }
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };
  return (
    <section>
      {loader && <Loader />}
      {!loader && (
        <div className="hero_container">
          <Navbar />
          <div className="login_wrap">
            <div className="login_container">
              <h3>Signup</h3>
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
                <button onClick={signup} className="btn">
                  Signup
                </button>
              </form>
              <p>
                <h5>Already have account?</h5>
                <NavLink to={"/login"}>
                  <h5 className="txt">Login</h5>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
