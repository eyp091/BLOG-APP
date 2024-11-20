import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import blogRoutes from './routes/blog.routes.js';
import categoryRoutes from './routes/category.routes.js';
import userRoutes from './routes/user.routes.js';

import connectMongoDb from './db/connectToMongoDb.js';
const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config();

app.use(express.json()); //json formatında gelen http isteklerinin body'sini alır req.body kısmına ekler.
app.use(cookieParser()); //cookileri işlemek için req.cookie.

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send("hello blog app");
// })

app.listen(PORT, () => {
    connectMongoDb();
    console.log(`listening port ${PORT}`);
})