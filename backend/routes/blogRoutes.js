import express from "express";
import blogModel from "../models/blogModel.js";
const router = express.Router();

router.post('/add-blog', async(req,res) => {
    try{
        const{title, authorId, content, tags, imageUrl} = req.body;
        const data = new blogModel({
            title : title,
            authorId : authorId,
            content : content,
            tags : tags,
            imageUrl : imageUrl
        })

        const saveBlog = await data.save();
        res.status(201).json(saveBlog);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get('/blogs', async(req,res) => {
    try{
        const allBlogs = await blogModel.find({});
        if(allBlogs){
            res.status(201).json(allBlogs);
        }else{
            res.status(400).json("Error while fetching the data");
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get('/blog/:id', async(req,res) => {
    try {
        const blogId = req.params.id;
        if(blogId){
            const fetchedBlog = await blogModel.findOne({_id : blogId});
            if(fetchedBlog){
                res.status(201).json(fetchedBlog);
            }else{
                res.status(400).json("Error while fetching the data");
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.put('/blog/:id', async(req,res) => {
    try{
        const blogId = req.params.id;
        const updateBlog = req.body;
        if(blogId){
            const updatedBlog = await blogModel.findByIdAndUpdate(blogId, updateBlog, {new : true});

            if(updatedBlog){
                res.status(201).json(updatedBlog);
            }else{
                res.status(400).json("Error while updating the data");
            }
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.delete('/blog/:id', async(req,res) => {
    try{
        const blogId = req.params.id;
        if(blogId){
            const process = await blogModel.findByIdAndDelete(blogId);
            if (process) {
                res.status(200).json("Deleted the blog data with respective id");
            } else {
                res.status(404).json({ error: "Animal not found" });
            }
        } else {
            res.status(400).json({ error: "Invalid request data" });
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;