import express from 'express';
import BlogRoutes from './routes/blog.routes.js';
import connectToDb from './config/mongoDb.js';
import {config} from 'dotenv';
import { renderBlogDetail, viewBlogs } from './controllers/blog.controller.js';
config();
const app= express();
app.use(express.json());
app.set('view engine','ejs');
app.get('/blogs', viewBlogs);
app.get('/blogs/:blogId',renderBlogDetail);
app.get('/ping',(req,res)=>{
    res.status(200).send('Server is up!');
})
app.use('/api/blog',BlogRoutes);
app.all('*',(req,res)=>{
    res.status(404).send('<html><body><h1>Page not found</h1></body></html>')
})
app.listen(5020, async()=>{
    await connectToDb();
    console.log('server is listening at http://localhost:5020');
})