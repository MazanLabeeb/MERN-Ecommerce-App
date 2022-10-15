import express from "express";
import Product from "../models/product.model.js";
import delay from "./../utils/delay.utils.js";

const router = express.Router();

// @route GET /api/products/
// @desc fetch all the products
// @access Public



router.get('/', async (req, res, next)=> {
    let products = await Product.find({});
    res.json(products);
})



// @route GET /products/api/:id
// @desc fetch a single product filtered by id
// @access Public
router.get('/:id', async (req, res, next)=> {
    Product.findById(req.params.id).exec()
    .then(async (product) => {
        product ? res.json(product) : res.status(404).json({message: "Product Not Found"});
    })
    .catch(err => {
        const error = new Error("Product not Found");
        error.statusCode = 404;
        next(error);
    })
})


export default router;