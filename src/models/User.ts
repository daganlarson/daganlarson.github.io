import mongoose, { Schema } from "mongoose";
import { use } from "react";

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    student_id: {
        type: Number,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
}, { timestamps: true});

export default mongoose.model("User", userSchema);