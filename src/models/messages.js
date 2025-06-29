import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    package:{
        type: String,
        required: true
    }
})

export default mongoose.models.message || mongoose.model("message", messageSchema);