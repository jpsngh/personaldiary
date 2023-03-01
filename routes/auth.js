import express from "express";

import {body} from "express-validator";
import createLogin from "../controllers/createUser.js";
import getUser from "../controllers/getuser.js";
import login from "../controllers/login.js";
import fetchUser from "../middleware/fetchUser.js";
const router = express.Router();


router.all("/createuser",[body('name','enter a valid name').isLength({min:5}),
    body('email','cmon email is wrong bruh').isEmail(),
    body('password','password not good').exists() ]
,createLogin)

router.all("/login",[
    body('email','cmon email is wrong bruh').isEmail(),
    body('password','password not good').exists() ]
,login);
router.all("/getUser",fetchUser,getUser);
export default router