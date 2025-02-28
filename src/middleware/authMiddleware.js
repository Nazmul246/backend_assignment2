const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    // Geting the token
    const token = req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        // Verifying the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
