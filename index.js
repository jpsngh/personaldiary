import express from "express";
import connectDB from "./db.js";

import authRoute from "./routes/auth.js"
import noteRoute from "./routes/notes.js"
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
connectDB();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hey");
})
app.use('/api/auth',authRoute)
app.use('/api/notes',noteRoute)








const port = process.env.PORT || 4000;

app.listen(port, () => `Server running on port ${port} 🔥`);