import { Router } from "express";
import {ProductControllerInterface} from '../controller/productController'


export const newProductRouter = async(productController: ProductControllerInterface): Promise<Router> => {
    const router = Router();
    router.get('/', productController.getProduct);
    router.post('/', productController.addProduct);
    return router;
};




