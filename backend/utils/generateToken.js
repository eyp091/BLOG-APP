import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, { //userId jwt'nin payload'ına eklenir.
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000, // ms
        httpOnly: true, // prevetn XSS attack cross-side scripting attacks.
        sameSite: "strict", // CSRF attacs cross-site request forgery attacs
        seruce: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenAndSetCookie;