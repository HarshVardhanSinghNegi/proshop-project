import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';

// @desc   Fetches all products
// @route  GET/api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // throw new Error('Some error!');
    res.json(products);
})


// @desc   Fetches a product
// @route  GET/api/products/:id
// @access  public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product)
    } else {
        res.status(404);
        throw new Error('Resource not found!');
    }
})


export { getProducts, getProductById };
