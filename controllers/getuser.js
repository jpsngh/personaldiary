 
import User from "../models/User.js";

import jwt from "jsonwebtoken"

 
const JWT_SECRET = " HARRY IS A BAD BOY"
 
 const getUser = async (req,res)=>{
    try{
       let userId = req.user.id
       console.log("hey1")
        const user = await User.findById(userId).select("-password")
        console.log("hey")
        res.send(user)

    }
    catch(error){
        return res.status(400).json({errors:error.message});
    }
    }

 export default getUser