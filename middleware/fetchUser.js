import jwt from "jsonwebtoken"
const JWT_SECRET = " HARRY IS A BAD BOY"

const fetchUser = (req,res,next)=>{
    const token =req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please send authenticated token"})
    }
    try{ const string = jwt.verify(token,JWT_SECRET);
        req.user = string.user;
        next()}
   

catch(error){
    return res.status(400).json({message:error.message})

}
}
export  default fetchUser