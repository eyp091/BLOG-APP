import express from 'express';
import protectRoute from '../middleware/protectRoutes.js';
import { getMyProfile, updateMyProfile } from '../controller/user.controller.js';

const routes = express.Router();

routes.get('/my-profile/:id', protectRoute, getMyProfile);
routes.put('/update-user/:id', protectRoute, updateMyProfile);

export default routes;