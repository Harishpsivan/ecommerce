var jwt = require('jsonwebtoken');

const verifyAdmin = async (req, res, next)=>{
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(403).json({ message: "Access denied. No token provided." });
          }

        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)

        if (!decoded.isAdmin) {
            return res.status(403).json({ message: "Access denied. Admins only." });
        }

        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token", error: error });
    }
}

module.exports = verifyAdmin