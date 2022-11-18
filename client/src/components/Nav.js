import React from 'react'
import '../css/nav.css'
import { NavLink } from "react-router-dom"
export default function Nav() {
  return (
    <nav>
         <NavLink to={"/"}>
        <div>
            <h3 className='logo'>Noteify</h3>
        </div>
        </NavLink>
        <NavLink to={"/login"}>
        <div className='login_btn'>
            Login
        </div>
        </NavLink>
    </nav>
  )
}
