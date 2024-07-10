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

const getProductById = (productId: string) => {
    const result = Product.findById(productId);
    return result;
}


//update product by id
const updateProductById = (productId: string, productData: Partial<TProduct>) => {
    const result = Product.findByIdAndUpdate(productId, productData, { new: true });
    return result;
}


//delete product by id
const deleteProductById = (productId: string) => {
    const result = Product.findByIdAndDelete(productId);
    return result;
}


//search product by id
const searchProducts = (searchTerm: string) => {
    const result = Product.find({ 
        $or: [
            { name: { $regex: searchTerm, $options: 'i' } },
            { description: { $regex: searchTerm, $options: 'i' } }
        ]
    });
    return result;
}


export const ProductServices = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    searchProducts
}

