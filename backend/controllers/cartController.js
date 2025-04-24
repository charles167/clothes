// Add products to the cart
const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;  // userId is retrieved from authMiddleware
       

        // Find the user by ID
     const userData = await User.findById(userId);
     let cartData = await userData.cartData;

        // Check if item is already in the cart
        if (cartData[itemId]) {
            // Check if the specific size exists
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            // Initialize item and size in cart
            cartData[itemId] = {};
            cartData[itemId] = { [size]: 1 };
        }

        // Update the user's cart
        await UserModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added To Cart Successfully!" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Failed to Add To Cart!" });
    }
};

// Update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
  

        const userData = await User.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;
       


       
            await User.findByIdAndUpdate(userId, { cartData });
            res.json({ success: true, message: "Cart updated successfully!" });
        
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Failed to update cart!" });
    }
};

// Get user cart data
const getUserCart = async (req, res) => {
    try {
        const userId = req.body.userId;

        const userData = await User.findById(userId);
        let cartData = await userData.cartData;

            res.json({ success: true, cartData});
       
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Failed to retrieve cart data!" });
    }
};

export { addToCart, updateCart, getUserCart };
