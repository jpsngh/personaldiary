import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {body,validationResult} from "express-validator";
 
const JWT_SECRET = " HARRY IS A BAD BOY"
 
 const login = async (req,res)=>{
    console.log(req.body);


res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
   
    const errors= validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body
    try{
        let user= await User.findOne({email})
        if (!user){
            return res.status(400).json({error: "Please login with right credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password)
        if(!passwordCompare){
            return res.status(400).json({errors:errors.array()});
        }
        const data = {
            user:{
                id:user.id
            }
         }
        const jwtData =jwt.sign(data,JWT_SECRET)
       
        // eslint-disable-next-line no-labels
        res.json(jwtData);

    }catch(error){
        return res.status(400).json({message:error.message})
    }

 }
 export default login
    

