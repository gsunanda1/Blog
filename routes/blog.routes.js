import express from 'express';
import { createBlog, getAllBlogs, getBlogDetail } from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getAllBlogs); // get all blog detail
router.post('/', createBlog);
router.get('/:id',getBlogDetail); // get single blog detail


export default router;