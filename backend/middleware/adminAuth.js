import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
      // Extract token from Authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({ success: false, message: 'Not Authorized. Please log in again.' });
      }
  
      const token = authHeader.split(' ')[1]; // Extract the token after "Bearer"
      
      // Verify the token
      const token_decode = jwt.verify(token, process.env.JWT_SECRET);
  
      // Check if the token contains the correct email and isAdmin flag
      if (token_decode.email !== process.env.ADMIN_EMAIL || !token_decode.isAdmin) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
      }
  
      // Attach admin details to request for further use
      req.admin = token_decode;
  
      // Proceed to next middleware
      next();
  
    } catch (error) {
      console.log("JWT Verification Error:", error.message); // Log the error
      return res.json({ success: false, message: 'Invalid or expired token. Please log in again.' });
    }
  };

export default adminAuth