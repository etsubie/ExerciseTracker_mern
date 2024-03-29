import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{ 
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }},
    {timestamps: true}

);

const userModel = mongoose.model('user', userSchema)
export default userModel;