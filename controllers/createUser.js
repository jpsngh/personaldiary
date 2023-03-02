
import User from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {body,validationResult} from "express-validator";

const JWT_SECRET = " HARRY IS A BAD BOY"

const createLogin = async (req,res)=>{
    console.log(req.body);


res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    const errors= validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    let user= await User.findOne({email:req.body.email})
    if (user){
        return res.status(400).json({error: " User exist"});
    }
    const salt = await bcrypt.genSalt(10)
    const pswd = await bcrypt.hash(req.body.password,salt);
   

    user = await User.create({
        name:req.body.name,
        password:pswd,
        email:req.body.email

    }).catch(err=> { res.json({message:err.message})});
    const data = {
        user:{
            id:user.id
        }
     }
    const jwtData =jwt.sign(data,JWT_SECRET)
    console.log(jwtData);
    res.json(user)
    
    
    
    
}

export default createLogin