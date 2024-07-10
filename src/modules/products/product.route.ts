import express from 'express'
import { ProductControllers } from './product.controller';

const router = express.Router()

router.post('/', ProductControllers.createProduct)
router.get('/', ProductControllers.getAllProducts)
router.get('/:productId', ProductControllers.getProductById);
router.put('/:productId', ProductControllers.updateProductById)

export const ProductRoutes = router;