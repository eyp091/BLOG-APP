import express, { Router } from 'express';
import { setBlog, getBlog, deleteBlog, getAllBlogs } from '../controller/blogs.controller.js';
import protectRoute from '../middleware/protectRoutes.js';

const routes = express.Router();

routes.get('/', protectRoute, getAllBlogs);
routes.get('/:id', protectRoute, getBlog);
routes.post('/setBlog', protectRoute, setBlog);
routes.delete('/deleteblog/:id', deleteBlog);

export default routes;