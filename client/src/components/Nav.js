import React, { useContext } from "react";
import "../css/nav.css";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const [details] = useContext(UserContext);
  return (
    <nav>
      <NavLink to={"/"}>
        <div>
          <h3 className="logo">Noteify</h3>
        </div>
      </NavLink>
      {!details.token && (
        <NavLink to={"/login"}>
          <div className="login_btn">Login</div>
        </NavLink>
      )}
      {
        details.token && (
          <div className="profile"><h3>{details.user[0]}</h3></div>
        )
      }
    </nav>
  );
}
