import Blog from "../models/blogs.model.js";
import Category from "../models/categories.model.js";

export const setBlog = async (req, res) => {
    try {
        const {title, content, categoryId} = req.body;
        const autherId = req.user._id;

        const categoryName = await Category.findOne({categoryId});

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
            return res.status(401).json({error: "Did not add a blog."})
        }

    } catch (error) {
        console.log("Error in setBlog controller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}

export const getBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId);

        if (blog) {
            return res.status(200).json(blog);
        } else {
            return res.status(404).json({error: "Blog not found."});
        }
        
    } catch (error) {
        console.log("Error in getBlog controller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const deletedBlogId = req.params.id;
        const deletedBlog = await Blog.findByIdAndDelete(deletedBlogId);

        if (!deletedBlog) {
            return res.status(404).json({error: "Blog not found."});
        }

        res.json({message: "Blog successfully deleted.", blog: deletedBlog});
    } catch (error) {
        console.log("Error in deleteBlog controller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}