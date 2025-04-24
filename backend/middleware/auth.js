import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
    const {token}= req.headers;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Please login again.' });
    }

   

    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;  // Attach the decoded user ID to req.body
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ success: false, message: error.message });  // Send the actual error message
    }
};

export default authUser;
