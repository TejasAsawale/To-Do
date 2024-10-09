const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async(req,res,next) => {
    let token;

    // Check if the Authorization header exists and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Extract the token part after 'Bearer'
        token = req.headers.authorization.split(' ')[1];
    } else {
        return res.status(401).json({
            status: false,
            message: 'Not authorized, no token provided',
        });
    }

    if (!token) {
        return res.status(401).json({
            status: false,
            message: 'Not authorized, no token',
        });
    }

    try {
        // Verify the token using the same secret as in the login function
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select('-password');

        if (!req.user) {
            return res.status(404).json({
                status: false,
                message: 'User not found',
            });
        }

        next();  // Move to the next middleware/route handler
    } catch (error) {
        console.log('JWT verification failed:', error.message);
        return res.status(401).json({
            status: false,
            message: 'Not authorized, token invalid',
        });
    }
};

module.exports = { protect };


// module.exports = function (req, res, next) {
//     const token = req.header("x-auth-token");
//     if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded.user;
//         next();
//     } catch (err) {
//         res.status(401).json({ msg: "Token is not valid" });
//     }
// };
