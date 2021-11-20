import { Router } from 'express';
import { newProductRouter } from './productRouter';
import {ProductControllerInterface} from '../controller/productController'
export const newRouter = async (productController: ProductControllerInterface): Promise<Router> => {
    const v1 = Router();
    v1.use("/product", await newProductRouter(productController));
    return v1;
};