import { Request, Response } from "express"
import { ProductServices } from "./product.service"

const createProduct = async (req: Request, res: Response) => {

    const productData = req.body;
    const result = await ProductServices.createProduct(productData)

    res.json({
        success: true,
        message: 'Product is created successfully',
        data: result
    })
}

const getAllProducts = async (req: Request, res: Response) => {

    try {
        const result = await ProductServices.getAllProducts()
        res.status(200).json({
            success: true,
            message: 'Product is fetched successfully',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: error,
        })
    }
}

export const ProductControllers = {
    createProduct,
    getAllProducts
}
