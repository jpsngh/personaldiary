import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect ,useState,useContext} from 'react'
import NoteState from '../context/notes/NoteState';
import noteContext from '../context/notes/noteContext';

function Signup() {
  useEffect(()=>{
    if(sessionStorage.getItem('auth')){
      navigate("/profile");
    }
  },[])
  const navigate = useNavigate();
  const [data,setData] = useState("")
  const [username,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [name,setName] = useState("");
  const [soc,setSoc] = useState("");
  const {addUser,error} =useContext(noteContext);
  const handleSubmit= (async (e)=>{
    e.preventDefault();
    const result = await addUser(username,pass,name,soc);
   if(result){
    navigate("/login");
   }
   else
  {
    return setData(<div> User already Exist </div>)
  }
   
  })
  return (
    <div align="center">
   <h1 align="center"> New user   </h1> 
   {data}
    <form>
     <div className="form-col">
        <div className="form-group col-md-4">
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e)=>(setUser(e.target.value))}className="form-control" id="inputEmail4" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="">Name</label>
          <input type="name" onChange={(e)=>(setName(e.target.value))} className="form-control" id="inputEmail4" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="">Socials</label>
          <input type="name"onChange={(e)=>(setSoc(e.target.value))}className="form-control" id="inputEmail4" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Password</label>
          <input type="password"  onChange={(e)=>(setPass(e.target.value))} className="form-control" id="inputPassword4" />
        </div>
        <button  disabled={username<4||pass<4||name<4} type="Submit" className="btn btn-primary" onClick={handleSubmit} > Sign up</button>
    </div>
    </form>
    </div>
  )
}

export default Signup