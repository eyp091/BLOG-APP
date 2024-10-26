import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Password don't match."});
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "Username already exists."});
        }

        //HASH PASSWORD
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //CREATE PROFILEPIC
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName: fullName,
            username: username,
            password: hashedPassword,
            gender: gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        if (newUser) {
            // generate JWT is here
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({error: "Invalid user data."});
        }

    } catch (error) {
        console.log("Error in signup controller: ", error);
        res.status(500).json({error: "Internal server error."});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        const loginUser = await User.findOne({username});
        // const currentPassword = password === loginUser?.password;
        const ifPasswordCurrent = await bcryptjs.compare(password, loginUser?.password ||"");
        
        if (!loginUser || !ifPasswordCurrent) {
            return res.status(400).json({error: "Invalid username or password."});
        }

        generateTokenAndSetCookie(loginUser._id, res);

        res.status(200).json({
            _id: loginUser._id,
            fullName: loginUser.fullName,
            username: loginUser.username,
            gender: loginUser.gender 
        })
    } catch (error) {
        console.log("Error in login controller: ", error);
        res.status(500).json({error: "Interval server error."});
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0}); //tarayıcıdaki jwt'yi sıfırlar.
        res.status(200).json({message: "Logged out successfuly."});
    } catch (error) {
        console.log("Error in logout controller: ", error);
        res.status(500).json({error: "Interval server error."})
    }
}