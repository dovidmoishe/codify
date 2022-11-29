import React, { useContext , useEffect} from 'react'
import Nav from './Nav'
import '../css/profile.css'
import { UserContext } from '../context/UserContext'
import { useNavigate,NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Card from './Card';
import { MdAdd } from 'react-icons/md';
export default function Profile() {
    const [details]=useContext(UserContext)
    const navigate=useNavigate()

    useEffect(() => {
        if (!details.token) {
            toast.error("You need to login", {
                theme: "light",
              });
          navigate("/login");
        }
      }, []);

  return (
    <section className='profile_container'>
        <Nav/>
        <h1>Your Codes</h1>
        <section className='card_wrapper'>
        <Card title="Java Program Done " code="System.outprintln()nddhdhdh"/>
        <Card title="Java Program Done " code="System.outprintln()nddhdhdh"/>
        <Card title="Java Program Done " code="System.outprintln()nddhdhdh"/>
        </section>
        <NavLink to='/editor'>
        <div className='add'>
       <MdAdd/>
       </div>
       </NavLink>
    </section>
  )
}
