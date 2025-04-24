// Ensure you have only one import for cloudinary
import { v2 as cloudinary } from 'cloudinary'; // Correct import
import productModel from '../models/productModel.js';


// Function for adding a product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Get uploaded images from req.files
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        // Filter out undefined images
        const images = [image1, image2, image3, image4].filter(item => item !== undefined);

        // Upload images to Cloudinary
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' }); // Use 'cloudinary' here
                return result.secure_url;
            })
        );

        const productData ={
       
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestseller:bestseller === "true" ? true : false,
            sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes), 
            image:imagesUrl,
            date:Date.now(),
        }
               console.log(productData);

               const product = new productModel (productData)

               await product.save()
               
        
        // Respond with success
        res.json({ success: true, message:"Product Added" });

    } catch (error) {
        // Log and respond with error
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// Function for listing products
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function for removing a product
const removeProduct = async (req, res) => {
    try {
       
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Function for getting single product info
const singleProduct = async (req, res) => {
    try {
        const {productId} =req.body // Assuming the product ID is passed in the URL
        const product = await productModel.findById(productId);
      
        res.json({ success: true, product });
        
       
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
export{listProduct,addProduct,removeProduct,singleProduct}



