import User from "../models/user.model.js";
import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
const { ObjectId } = mongoose.Types;

export const getMyProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const objectId = new Object(userId);

        const myUser = await User.findById(objectId);

        if (!myUser) {
            return res.status(404).json({error: "User not found!"});
        }

        return res.status(200).json(myUser);
    } catch (error) {
        console.log("Error in getMyProfile contoller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}

export const updateMyProfile = async (req, res) => {
    try {
        const {fullName, username, password, gender} = req.body;
        const userId = req.params.id;
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);        

        const updatedUser = await User.findOneAndUpdate(
            {_id: userId},
            {fullName, hashedPassword, gender, username},
            {new: true, runValidators: true}
        );

        if (!updatedUser) {
            return res.status(400).json({error: "Kullanıcı güncellenemedi."});
        }

        return res.status(201).json(updatedUser);
    } catch (error) {
        console.log("Error in updateMyProfile controller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}