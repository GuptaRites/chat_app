import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const protectRoute = async (req, resizeBy, next) => {
  try {
    const token = req.headers.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.json({ success: false, message: "User not found" });
  } catch (error) {}
};
