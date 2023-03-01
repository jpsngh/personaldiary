import React,{useEffect} from 'react'
import {Link, useLocation} from "react-router-dom"
import Login from "./Login"
import Signup from './Signup';

function Navbar() {
    let location = useLocation();
    useEffect(()=>{
        console.log(location.pathname);
    },[location]);
  return (
 
<div>

      <nav className="navbar  navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={location.pathname==="/login"||location.pathname==="/signup"?"/home":"/profile"} > Personal Dairy</Link>
    <Link className="navbar-brand" to="/" onClick={()=>{sessionStorage.clear()}} > Logout </Link> 
   



    <div className="navbar-collapse collapse" id="navbarColor02" >
     
    
       
      
    

    
    </div>
  </div>
</nav>
    </div>
  


  
  
  )
}

export default Navbar
