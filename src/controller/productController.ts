import {Request, Response} from 'express';
import { ProductServiceInterface } from '../services/product';

export interface ProductControllerInterface {

    getProductById(req: Request, res: Response): any;
     getProduct(req: Request, res: Response): any;
     addProduct(req: Request, res: Response): any;
     deleteProduct(req: Request, res: Response): any;

}

export class ProductController implements ProductControllerInterface {
      
       productService: ProductServiceInterface;

       constructor(productService: ProductServiceInterface) {
           this.productService = productService;
       }

    async getProductById(req: Request, res: Response) { 
        try{
              const data = await this.productService.getById(req.params.id);
              res.status(200).json({
                  result: data,
              });


        }catch(err){
            res.status(500).json({
                error: err,
            });
        }
    }   
    async getProduct(req: Request, res: Response) {
        try{
            const data = await this.productService.get();
            res.status(200).json({
                result: data,
            });
        }catch(err) {
            res.status(500).json({
                error: err,
            });
        }
    }
    async addProduct(req: Request, res: Response) {
        try{
          const product = await this.productService.addProduct(req.body);
          res.status(200).json({
            result: product,
            msg: 'Product added successfully',
        });
        }catch(err){
            res.status(500).json({
                error: err,
            });
        }
    }
    deleteProduct(req: Request, res: Response) {
        throw new Error('Method not implemented.');
    
    }
        
}

export const newProductController = async (productService: ProductServiceInterface): Promise<ProductController> => {
             return new ProductController(productService);  
};



