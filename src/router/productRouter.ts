import { Router } from "express";
import {ProductControllerInterface} from '../controller/productController'


export const newProductRouter = async(productController: ProductControllerInterface): Promise<Router> => {
    const router = Router();
    router.get('/', productController.getProduct);
    router.get('/elastic/', productController.getElasticProduct);
    router.post('/', productController.addProduct);
    router.post('/elastic', productController.addProductForElastic);
    router.get('/:id', productController.getProductById);
   
    return router;
};




