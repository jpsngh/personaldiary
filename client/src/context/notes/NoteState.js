import {useState,useEffect} from 'react';
import noteContext from './noteContext';
import axios, { AxiosError } from "axios";

import Alert from '../../components/Alert';

function NoteState(props) {
  let access =  localStorage.getItem("token")

  const authAxios = axios.create({
  headers:{auth: `Bearer ${access} `},
Content:"application/json"})
 
  let initial = [

    ]
   
    const [error,setError] = useState();
    const [data,setData]= useState(initial);
  const [token,setToken] = useState("");
  const [note,setNote]= useState(initial);
 
  
  
  const addUser = async (username, pass, name, soc) => {
    const response = await axios.post("http://localhost:4000/api/auth/createuser", {
      email: username,
      password: pass, name: name, socials: soc
    }
    ).catch((error)=>{
      console.log(error);
      setError(error.response.status);
      return error
    });
    if (response) {
      const json = await response.data;
      console.log(json);
      localStorage.clear();


      localStorage.setItem("token",json)
      setError(false,"");
      setError(200);
     return json
    }
  };

  const fetchUser = async (username, pass) => {
    const response = await axios.post("http://localhost:4000/api/auth/login", {
      email: username,
      password: pass
    }
    ).catch((error) => {
      console.log(error.response.status) 
     setError(error.response.status);

      return error
      });
     
    if (response) {
      const json = await response.data;
    
      console.log(json);
      setToken(json);
      console.log(token);
      console.log(json)
      localStorage.clear();


      localStorage.setItem("token",json)
     setError(200);
     return json
    }
      
   
  };
  const getUserCopy = async (username, pass) => {
    const response = await axios.post("http://localhost:4000/api/auth/getuser", {
      email: username,
      password: pass,
      },authOptions
    
    ).catch((error) => {console.log(error)
    setError(error.response.status)
  });
    if (response) {
      const json = await response.data;
      console.log(json);
      console.log(response);
      setData(json)
      console.log(json)
      return json

    }
    
    else
     {}
  };
  const fetchNotes = async () => {
    const response = await axios("http://localhost:4000/api/notes/fetchallnotes",authOptions
    
    ).catch((error) => (console.log(error)) 
    );
    if (response) {
      const json = await response.data;
      setNote(json);
      console.log(note);
      return json 
      
    }
       

    
  };
  const deleteNote = async(id)=>{
    const response = await axios.delete("http://localhost:4000/api/notes/deletenote/"+id+"/",authOptions).catch(error=>(console.log(error)))
    const json = await response.data
    
    const newNote = note.filter((notes)=>(notes._id!==id) )
    setNote(newNote)
    return json
    
  }
  const editNote = async(title,description,tag,id)=>{
    const data = {
      title:title,
      description:description,
      tag:tag
    }
    const response = await axios.put("http://localhost:4000/api/notes/updatenote/"+id+"/",data,authOptions).catch(error=>(console.log(error)))
    const json = await response.data
    return json
  }
  let authOptions = {
   
    headers: {
      "auth-token": localStorage.getItem("token"),
      "content-type":"application/json"
    }
    
  }
 const addNote= async(title,description,tag)=>{
  const data = {
    title:title,
    description:description,
    tag:tag
  }
  
  const response = await axios.post('http://localhost:4000/api/notes/addnote',data,authOptions).catch(error=>console.log(error))
  
 const json = await response.data
 const newNote = {
  "_id": json._id,
  "user": json.user,
  "title": json.title,
  "tag": json.tag,
  "description": json.description,
  "date": json.date,
  "__v": json.__v
 }
 console.log(newNote)
   
  setNote(note.concat(newNote))
    return json 
    
  
     

 }


  return (
    <noteContext.Provider value={{ fetchUser, setNote,addUser,getUserCopy,fetchNotes,note,authOptions,addNote,deleteNote,editNote,data,error}}>
      {props.children}
    </noteContext.Provider>
  );
}

export default NoteState;