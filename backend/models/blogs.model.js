import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    auther: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model("blogs", blogsSchema);

export default Blog;