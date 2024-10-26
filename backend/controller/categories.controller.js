import Category from "../models/categories.model.js";

export const addNewCategory = async (req, res) => {
    try {
        const {categoryId, categoryName} = req.body;

        const newCategory = new Category({
            categoryId: categoryId,
            categoryName: categoryName,
        });

        if (newCategory) {
            await newCategory.save();
        }

        res.status(201).json(newCategory);
    } catch (error) {
        console.log("Error in addNewCategory controller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find(); //tüm kategorileri al.

        if (categories) {
            return res.status(200).json(categories);
        } else {
            return res.status(404).json({error: "Categories not found."});
        }
    } catch (error) {
        console.log("Error in getCategories controller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}