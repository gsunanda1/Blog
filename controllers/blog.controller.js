import Blog from "../models/blog.model.js";

export const getAllBlogs = async(req,res)=>{
    try{
        const data = await Blog.find();
        res.status(200).send(data);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}
// create blog(post request)
export const createBlog =async(req,res)=>{
    const blogData = req.body;
    try{
        const data = await Blog.create(blogData);
        res.status(200).send(data);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}
export const getBlogDetail =async(req,res)=>{
    const { id }= req.params;
    try{
        const data = await Blog.findById(id);
        res.status(200).send(data);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

export const viewBlogs = async(req,res)=>{
    const blogs = await Blog.find();
    res.render('blogList.ejs',{blogs});
}

export const renderBlogDetail = async(req,res)=>{
    const {blogId} = req.params;
    const blog = await Blog.findById(blogId);
    res.render('blogDetail',{blog});
}