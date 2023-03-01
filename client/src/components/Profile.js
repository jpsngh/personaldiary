import React,{useEffect,useContext,useState,} from 'react'
import noteContext from '../context/notes/noteContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NoteItem from './NoteItem';
import { Modal,Input,Button,Select,Form } from 'antd';
import Default from './Default';

export const Profile = (props) => {
  const navigate = useNavigate();
    const {note,fetchNotes,addNote,data} = useContext(noteContext);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [tag,setTag] = useState("");
    const [render,setRender]=useState([]);
    const [open,setOpen]=useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
     useEffect(()=>{
      fetchNotes();
      
     },[])
     const handleClick=()=>{

     const result = addNote(title,desc,tag);

     setOpen(false);
     
     
     }
     const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };
    
  return (
    <Default>
    <div align="center" style={{display:"flex",flexDirection:"column",gap:"20px",margin:"20px"}}>
      <div align="center"> <h5>  Welcome  { data ? data.name:""} </h5> </div>
      <h3><Button type='primary' style={{position:"relative"}} onClick={()=>{setOpen(true)}}> Add Thoughts</Button></h3>
      <Modal
    
     title="Thoughts"
     open={open}

     confirmLoading={confirmLoading}
     onCancel={handleCancel}
      footer={false}
      > 
      
       {console.log(note)}
       <Form> 
        <Form.Item> 
        <Input type="description" name="title"  onChange={(e)=>(setTitle(e.target.value))} placeholder='Title'/>
        </Form.Item>
        <Form.Item>         <Input type="textbox" name="desc" onChange={(e)=>(setDesc(e.target.value))} placeholder='Description..'/>  </Form.Item>
         <Form.Item>         <Input type="description" name="tag" onChange={(e)=>(setTag(e.target.value))} placeholder='Tag'/></Form.Item>
        <Form.Item>         <Button  type='primary' htmlType="submit" disabled={desc.length<8|| title.length<1}   onClick={handleClick}> ADD</Button>        </Form.Item>

        </Form>
        </Modal>
        <div style={{display:"flex",flexDirection:"column-reverse"}}> 
      {note.length===0&&"No notes to display"}
     { note.map((key,value)=>{
      
       return <NoteItem data={key} key={value} ></NoteItem>
      })}
</div>
</div>


</Default>)}

 
    

