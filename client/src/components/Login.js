import React from 'react'
import { useEffect ,useState,useContext} from 'react'
import NoteState from '../context/notes/NoteState';
import noteContext from '../context/notes/noteContext';
import { useNavigate,Link } from 'react-router-dom';
import { Profile } from './Profile';

import NoteItem from './NoteItem';
import { Axios, AxiosError } from 'axios';

function Login() {
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      navigate("/profile");
    }
  },[])
  
  const {fetchUser,getUserCopy,fetchNotes,note,error} = useContext(noteContext)
 const [data,setData] = useState();
 const navigate = useNavigate();

 const handleSubmit= ( async()=>{
 
 const result1 =  await  fetchUser(username,pass);
 const result2=  await getUserCopy(username,pass);
 console.log( result1);
  if (result1) {
   sessionStorage.setItem('auth',JSON.stringify(result1));
   (navigate("/profile"))
  }
  else 
  {
    setData(<div> Wrong Credentials</div>)
  }
 
 })


  const [username,setUser] = useState("");
  const [pass,setPass] = useState("");
  
 

  return (
    <div style={{marginLeft:"30%",marginTop:"50px"}}> <h1> Login Form</h1> 
    
    <h3> {data} </h3> 

<div style={{display:"flex",flexDirection:"column", justifyContent:"center",gap:"10px"}}> 
  <div className="form-col" id= "main">
    <div className="form-group col-md-6 ">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" className="form-control" onChange={(e)=>(setUser(e.target.value))} id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6 ">
      <label htmlFor="password" >Password</label>
      <input type="password" className="form-control" onChange={(e)=>(setPass(e.target.value))} id="inputPassword4" placeholder="Password"/>
    </div>
     
  </div>
  <button style={{width:"80px"}} type="submit" onClick={handleSubmit} className="btn btn-primary">Sign in</button>
  <h7> New User... <Link to="/signup">Register</Link></h7>
  <div> 

        

      
  </div>
    </div>
    </div>
  )
}

export default Login