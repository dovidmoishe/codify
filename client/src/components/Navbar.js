import React from 'react'
import '../css/nav.css'
import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
    <nav>
         <NavLink to={"/"}>
        <div>
            <h3 className='logo'>Noteify</h3>
        </div>
        </NavLink>
        
    </nav>
  )
}
