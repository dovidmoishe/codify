import React from 'react'
import Navbar from './Navbar'
import { NavLink } from "react-router-dom";
import '../css/login.css'
const login=(e)=>{
  
}
export default function Login() {
  return (
    <div className='hero_container'>
        <Navbar/>
        <div className='login_wrap'>
          <div className='login_container'>
            <h3>Login</h3>
            <form>
              <input type='text' placeholder='Username'></input>
              <input type='text' placeholder='Password'></input>
              <NavLink to={'/roshan'} className='btn' onClick={login}>
                Login
              </NavLink>
             
            </form>
            <p><h5>Don't have account?</h5><NavLink to={'/signup'}><h5 className='txt'>Sign up</h5></NavLink></p>
          </div>
        </div>
    </div>
  )
}
