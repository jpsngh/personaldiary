import React,{useEffect,useContext}from 'react'
import noteContext from '../context/notes/noteContext';
export const Data = () => {
    const {getUserCopy}= useContext(noteContext);
    
    useEffect(()=>{
        getUserCopy();

    })
  return (
    <div></div>
  )
}
