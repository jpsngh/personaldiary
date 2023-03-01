import mongoose from "mongoose"
import dotenv from "dotenv"


const mongoURI = 'mongodb://localhost:27017/inote'
const MONGO_URI = "mongodb+srv://jpsngh:dondondonX1@pos.tarufnj.mongodb.net/?retryWrites=true&w=majority"
const connectDB= async ()=>{
 mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,
    useUnifiedTopology:true,}).then(()=>{
        console.log("MongoDB Connected")
    })
}





export default connectDB