import { body, validationResult } from "express-validator";

import express from "express";
import Notes from "../models/Notes.js";
import User from "../models/User.js";

import fetchUser from "../middleware/fetchUser.js";
const router = express.Router();

router.all("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});

router.all(
  "/addnote",fetchUser,
  [body("description", "enter a valid note").isLength({ min: 5 })],
  async (req, res) => {
    try{
    const { title, description, tag } = req.body;
    const user = (req.user.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Notes({
      title,
      description,
      tag,
      user 
    });
    const savedNote = await note.save();
    res.json(savedNote);
}
catch(error){
    res.status(400).json({"error":error.message})
}
  }
);



router.all(
    "/updatenote/:id",fetchUser,
    [body("description", "enter a valid note").isLength({ min: 5 })],
    async (req, res) => {
      try{
      const { title, description, tag } = req.body;
      const user = (req.user.id);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newNote = {};
      if(title){newNote.title=title}
      if(description){newNote.description=description}
      if (tag){newNote.tag=tag}

      let note =  await Notes.findById(req.params.id);
      if(!note){res.status(404).send("Not found")}

       else if (note.user.toString()!== req.user.id)
       {
        if(!note){res.status(401).send("Not authorized")}
      }
       else {note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true})
      res.json({note})
    }
  }
  catch(error){
     return  console.log(error);
  }
}

  );






router.delete(
    "/deletenote/:id",fetchUser,
    async (req, res) => {
      try{
      

      let note =  await Notes.findById(req.params.id);
      if(!note){res.status(404).send("Not found")}

      if(note.user.toString()!== req.user.id){
        if(!note){res.status(401).send("Not authorized")}
      }
      note = await Notes.findByIdAndDelete(req.params.id)
      res.json({note:note,message:"note deleted"})
    }
  catch(error){
      res.status(400).json({"error":error.message})
  }});

export default router;
