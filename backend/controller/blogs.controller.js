import Blog from "../models/blogs.model.js";
import Category from "../models/categories.model.js";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export const setBlog = async (req, res) => {
    try {
        const { title, content, categoryId } = req.body;
        const autherId = req.user._id;

        const categoryName = await Category.findOne({ categoryId });

        const newBlog = new Blog({
            title: title,
            content: content,
            category: categoryName,
            auther: autherId
        });

        if (newBlog) {
            await newBlog.save();

            return res.status(201).json(newBlog);
        } else {
            return res.status(401).json({ error: "Did not add a blog." })
        }

    } catch (error) {
        console.log("Error in setBlog controller: ", error);
        res.status(500).json({ error: "Interval server error." });
    }
}

export const getBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        
        const objectId = new ObjectId(blogId);

        const selectedBlog = await getBlogWithDetails(objectId);

        if (selectedBlog) {
            return res.status(200).json(selectedBlog[0]);
        } else {
            return res.status(404).json({ error: "Blog not found." });
        }

    } catch (error) {
        console.log("Error in getBlog controller: ", error);
        res.status(500).json({ error: "Interval server error." });
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        const blogsLength = blogs.length;
        const blogsDetails = [];
        for (var i = 0; i < blogsLength; i++) {
            const blogId = blogs[i]._id;
            const blogDetail = await getBlogWithDetails(blogId);

            //blogsDetails.push(blogDetail);

            if (Array.isArray(blogDetail)) {
                blogsDetails.push(...blogDetail);
            } else {
                blogsDetails.push(blogDetail);
            }
        }

        if (blogs) {
            return res.status(200).json(blogsDetails);
        } else {
            return res.status(404).json({ error: "Blogs not found." });
        }
    } catch (error) {
        console.log("Error in getAllBlogs controller.", error);
        res.status(500).json({ error: "Interval server error." });
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const deletedBlogId = req.params.id;
        const deletedBlog = await Blog.findByIdAndDelete(deletedBlogId);

        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog not found." });
        }

        res.json({ message: "Blog successfully deleted.", blog: deletedBlog });
    } catch (error) {
        console.log("Error in deleteBlog controller: ", error);
        res.status(500).json({ error: "Interval server error." });
    }
}

export const getMyBlogs = async (req, res) => {
    try {
        const userId = req.headers.authorization?.split(' ')[1];
        if (!userId) {
            return res.status(400).json({error: 'Kullanıcı id bulunamadı.'});
        }

        const myBlogs = await Blog.find({auther: userId});        

        if (!myBlogs) {
            return res.status(200).json({message: 'Henüz hiç blogunuz yok.'});
        }

        return res.status(200).json(myBlogs);
    } catch (error) {
        console.log("Error in getMyBlogs contoller.", error);
        res.status(500).json({ error: "Interval server error" });
    }
}

const getBlogWithDetails = async (blogId) => {

    const blog = await Blog.aggregate([
        { $match: { _id: blogId } },
        {
            $lookup: {
                from: "users",
                localField: "auther",
                foreignField: "_id",
                as: "autherDetails",
                pipeline: [{
                    $project: { createdAt: 0, gender: 0, password: 0, updatedAt: 0, __v: 0, _id: 0, }
                }]
            }
        },
        {
            $lookup: {
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "categoryDetails",
                pipeline: [{
                    $project: { categoryId: 0, __v: 0, _id: 0, }
                }]
            }
        },
        { $unwind: "$autherDetails" },
        { $unwind: "$categoryDetails" },
        { $project: { 'auther': 0, 'category': 0, } }
    ]);

    return blog;
}