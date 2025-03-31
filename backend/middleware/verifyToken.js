import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json("Token is missing");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Token is invalid" });
    }
    
    req.userId = decoded.userId; // Attach the userId to the request object
    next(); // Call next() to proceed to the next middleware
  } catch (error) {
    console.log("Error verifying token:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
    
  }
}