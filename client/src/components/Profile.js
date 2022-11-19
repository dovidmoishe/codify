import React, { useContext } from 'react'
import Navbar from './Navbar'
import '../css/profile.css'
import { UserContext } from '../context/UserContext'

export default function Profile() {
    const [details,setDetails]=useContext(UserContext)
  return (
    <section className='profile_container'>
        <Navbar/>
        <p>{details.user}</p>
    </section>
  )
}
