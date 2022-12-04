import {React} from "react";
import Nav from "./Nav";
import "../css/hero_section.css";
import { NavLink } from "react-router-dom";

export default function Herosection() {
  
  return (
    <>
      <div className="hero_container">
        <Nav />
        <div className="container">
          <div className="wrapper">
            <h1 className="first">Introducing</h1>{" "}
            <h1 className="Second">Noteify</h1>
          </div>
          <p className="info">
            A platform to write , share and access your code anywhere at any
            time.
          </p>
          <div className="btnwrapper">
            <NavLink to="/login">
              <div className="btn1">Get Started</div>
            </NavLink>
            <a href="https://github.com/roshan-acharya/noteify">
              <div className="btn2">View it on Github</div>
              </a>
            
          </div>
        </div>
      </div>
    </>
  );
}
