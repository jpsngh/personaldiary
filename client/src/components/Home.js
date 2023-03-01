import React,{useState,useEffect,useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import {Link}from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Default from './Default';

function Home() {
 const navigate = useNavigate();
  const {getUserCopy}= useContext(noteContext);
    

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      navigate("/profile");
    }
  },[])
  
    
    

  
  return (
   
  <Default>

    <div style={{ display:"flex",flexDirection:"column",marginLeft:"30%",marginTop:"10%"}}> 


      <h2> Welcome to Personal Dairy</h2>
   
<div style={{display:"flex", gap:"5rem",margin:"5%"}}>
        
<Link  className=' btn btn-primary btn-round bg-black' to="/login"> Login</Link>
    <Link  className=' btn btn-outline btn-round bg-blue'  to="/signup">Sign UP</Link>




  </div>

  </div>
  </Default>

  )}


export default Home