import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    tags: [{ type: String }],
    imageUrl: { type: String },
}, {timestamps : true});

const blogModel = mongoose.model('Blog', blogSchema);

export default blogModel;