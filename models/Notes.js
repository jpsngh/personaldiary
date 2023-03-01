import mongoose from "mongoose";
const {Schema} = mongoose;


const noteSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'

    },

    title:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default: "General"
    },
    description:{
        type:String,
        required:true
    },
 
    date:{
        type:Date,
        default: Date.now
    },
});
const Notes = mongoose.model('Notes',noteSchema)

export default Notes