import express  from 'express'
import{listProduct,addProduct,removeProduct,singleProduct} from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();


productRouter.post('/add',adminAuth,upload.fields([{name:'image1', maxCount:1},{name:'image2', maxCount:1},{name:'image3', maxCount:1},{name:'image4', maxCount:1}]),addProduct);
// Assuming you have already imported productRouter
productRouter.post('/remove',adminAuth, removeProduct);      // Corrected to .post
productRouter.post('/single', singleProduct);      // Corrected to include leading slash
productRouter.get('/list', listProduct);           // Corrected to use GET method and added leading slash


export default productRouter