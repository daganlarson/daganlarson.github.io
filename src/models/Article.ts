import mongoose, { Schema } from "mongoose";
import { use } from "react";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        unique: true,
        required: true,
    },
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    
}, { timestamps: true});

export default mongoose.model("Article", articleSchema);