import mongoose, { mongo } from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    posts: { //bu kategoriye ait olan postlar.
        type: mongoose.Schema.ObjectId,
        ref: "Blog",
    }
})

const Category = mongoose.model('category', categorySchema);

export default Category;