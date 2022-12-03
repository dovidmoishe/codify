import { useEffect , useContext } from "react"
import React  from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Nav from "../components/Nav"
export default function Share() {
    const [details] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(()=>{
        navigate(`/${details.user}`);
    },[])
  return (
    <div className="profile_container">
        <Nav/>
    </div>
  )
}
