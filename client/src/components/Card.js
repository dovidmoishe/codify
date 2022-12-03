import React ,{useContext} from 'react'
import { UserContext } from "../context/UserContext";
import { useNavigate,NavLink } from "react-router-dom";
import Axios from 'axios';
import '../css/card.css'
import { ImCross } from 'react-icons/im';
import { toast } from "react-toastify";
export default function Card({title,code,id}) {
  const navigate = useNavigate();
  const [details] = useContext(UserContext);
  const del=async ()=>{
    try{
    await Axios.delete(`http://localhost:8000/delete/${id}`)
    toast.success("Successfully deleted", {
      theme: "light",
    });
    navigate(`/share`);
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <section>
        
        <div className='card_container' key={id}>
            <div className='title'>
            <h3>{title.substring(0,18)} {title.length>15 && "......"}</h3>
            <h2 onClick={del}><NavLink to="" className="cross_btn"><ImCross /></NavLink></h2>
            </div>
            <p>{code.substring(0,26)} {code.length>26 && "......"}</p>
        </div>
    </section>
  )
}
