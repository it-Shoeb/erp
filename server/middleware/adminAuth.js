import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user exsists in the database and is an admin
    
    // if (decoded && decoded.role === "admin") {
    //   next();
    // } else {
    //   return res.status(403).json({ message: "Access denied. Admins only." });
    // }
  } catch (error) {
    res.status(401).json({ message: "Invalid or missing token." });
  }
};

export default adminAuth;
