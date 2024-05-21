import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getProduct);
router.get('/products/:productId', ProductController.getProductBySearchParams);
router.put('/products/:productId', ProductController.updateProductBySearchParams);
router.delete('/products/:productId', ProductController.deleteProductBySearchParams);

export const ProductRoute = router;