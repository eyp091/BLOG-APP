import express from 'express';
import { addNewCategory, getCategories } from '../controller/categories.controller.js';
import protectRoute from '../middleware/protectRoutes.js';

const routes = express.Router();

routes.get('/allCategories', protectRoute, getCategories);
routes.post('/addCategory', protectRoute, addNewCategory);

export default routes;