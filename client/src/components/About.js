import React,{useContext,useEffect,useState}from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import noteContext from '../context/notes/noteContext'
import {Button,Input,Card,Form,TextArea } from "antd"
import Default from './Default'
const About=() =>{
  const {TextArea} = Input
  const location = useLocation("")
const navigate = useNavigate();
  const a = useContext(noteContext)
  const {note,authOptions,fetchNotes,addNote,editNote,} = useContext(noteContext);
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [tag,setTag] = useState("");
  const {data} = location.state;
  const{_id} = location.state.data;
  console.log(data,_id);
  const handleClick=()=>{
    const result = editNote(title,desc,tag,_id);
    console.log(result);
    console.log("yay")
    if(result){
      navigate('/profile')
    }
    }
 
  
  return (
  <Default> 
    <Card style={{ margin:"50px",width:"1000px",flexDirection:"column",justifyContent:"space-between"}}> 
    <Form 
   defaultValue={data}> 
      <Form.Item label="Title">
    <Input defaultValue={data.title} type="description" name="title" onChange={(e)=>(setTitle(e.target.value))} placeholder="Title"/>
    </Form.Item>
    <Form.Item label="Description">
    <TextArea defaultValue={data.description} type="textarea" name="desc" onChange={(e)=>(setDesc(e.target.value))} placeholder='Description..'/>
    </Form.Item>
    <Form.Item label="Tag">
    <Input type="description" defaultValue={data.tag} name="tag" onChange={(e)=>(setTag(e.target.value))} placeholder='Tag'/>
    </Form.Item>
    <Button type="primary" disabled={desc.length<8|| title.length<1}  value={location.state.id} onClick={handleClick}> Update </Button> 
    </Form>
    </Card>
    </Default>
  )
}

export default About