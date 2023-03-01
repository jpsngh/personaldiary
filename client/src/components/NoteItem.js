import React,{useContext,useEffect,useRef,useState} from 'react'
import noteContext from '../context/notes/noteContext';
import About from './About';
import { Navigate,useNavigate } from 'react-router-dom';
import{Button,Input,Card } from "antd"
function NoteItem(props) {
  const navigate = useNavigate();
  const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [tag,setTag] = useState("");
  const {deleteNote,note,editNote,fetchNotes}= useContext(noteContext)
  const  {data} = props;
 
  const deleteItem=(id)=>{
 const result = deleteNote(id)
 if(result){
  navigate('/profile')
 }
  }
  const ref = useRef(null)
  const editItem=(id)=>{

   ref.current.toggle();

   function handleClick(){
    editNote(title,desc,tag,id)
     }
     }
 
  
  return (
    
    <Card hoverable > 
  <div style={{margin:"5px", display:"flex",flexDirection:"column" ,gap:"5px",}}> 
    <h5 className="card-title">{data.title}</h5>
    <div style={{display:"flex",flexDirection:"column", flexWrap:"wrap",width:"100%"}}> 
    {data.description}
    </div>
    {console.log(data._id)}
    <div> 
    <Button style={{margin:"5px"}} className="card-text" onClick={()=>deleteItem(data._id)}> DELETE</Button>
    <Button 
    className="card-text" onClick={()=>(navigate("/about",{state:{data:data}
}))}> EDIT</Button>
</div>
    
    </div>

   
    </Card>

  )
}

export default NoteItem