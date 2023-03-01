import express from "express";
import connectDB from "./db.js";

import authRoute from "./routes/auth.js"
import noteRoute from "./routes/notes.js"
import cors from 'cors';
import dotenv from 'dotenv';
import path  from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
connectDB();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/build')));



app.use('/api/auth',authRoute)
app.use('/api/notes',noteRoute)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  })









const port = process.env.PORT || 4000;

app.listen(port, () => `Server running on port ${port} 🔥`);