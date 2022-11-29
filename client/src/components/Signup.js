import React, {useState , useEffect , useContext } from "react"
import Navbar from "./Navbar"
import "../css/login.css"
import Axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { UserContext } from '../context/UserContext'

export default function Signup() {
    const [details]=useContext(UserContext)
const [info, setInfo] = useState({ user: "", password: "" });
  const navigate = useNavigate();

  useEffect(()=>{
    if(details.token){
      navigate(`/${details.user}`)
    }
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const signup = async (e) => {
    e.preventDefault();
    if (!info.user || !info.password) {
      toast.warn("Fill all the credentials", {
        theme: "light",
      });

      return;
    }
    try {
      const res = await Axios.post("http://localhost:8000/signup", {
        user: info.user,
        password: info.password,
      });

      if (res.status === 206) {
        toast.warn("User already exist", {
          theme: "light",
        });
        return;
      }

      if (res.status === 200) {
        toast.info("Successfully Signed Up", {
            theme: "light",
          });

        navigate("/login");
        return;
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
  );
}
