import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProduct =async (payLoad:TProduct) =>{
    const result = await Product.create(payLoad);
    return result;
}

const getAllProducts =() =>{
    const result = Product.find();
    return result;
}

export const ProductServices = {
    createProduct,
    getAllProducts
}

