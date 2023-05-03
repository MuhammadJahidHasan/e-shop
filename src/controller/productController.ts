import {Request, Response} from 'express';
import { ProductServiceInterface } from '../services/product';

export interface ProductControllerInterface {

    getProductById(req: Request, res: Response): any;
    getProduct(req: Request, res: Response): any;
    getElasticProduct(req: Request, res: Response):any;
    addProduct(req: Request, res: Response): any;
    deleteProduct(req: Request, res: Response): any;
    addProductForElastic(req: Request, res: Response):any;
}

export class ProductController implements ProductControllerInterface {
      
       productService: ProductServiceInterface;

       constructor(productService: ProductServiceInterface) {
           this.productService = productService;
           this.getProduct = this.getProduct.bind(this);
           this.getElasticProduct = this.getElasticProduct.bind(this);
           this.getProductById = this.getProductById.bind(this);
           this.addProduct = this.addProduct.bind(this);
           this.deleteProduct = this.deleteProduct.bind(this);
           this.addProductForElastic = this.addProductForElastic.bind(this);
       }

    async getProductById(req: Request, res: Response) { 

        try { 
              const data = await this.productService.getById(req.params.id);
              res.status(200).json({
                  result: data,
              });


        } catch(err){
            res.status(500).json({
                error: err,
            });
        }
    }   
    async getProduct(req: Request, res: Response) {

        try {
            const data = await this.productService.get();
            res.status(200).json({
                code: 'SUCCESS',
                message: 'Retrive all product',
                data,
            });
        } catch(err) {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        }
    }

    async getElasticProduct(req: Request, res: Response) {

          try {
            console.log('abcd');
            const product = await this.productService.getElasticProduct(); 
            res.status(200).json({
                result: product,
                msg: 'get product',
            });

          } catch(err) {
            console.log(err);
            res.status(500).json({
                error: err,
            });
          }
    }
    async addProduct(req: Request, res: Response) {

        try {
          console.log('add product');  
          const productObj = req.body;  
          const product = await this.productService.addProduct(productObj);
          res.status(200).json({
            result: product,
            msg: 'Product added successfully',
        });
        } catch(err){
            console.log(err);
            res.status(500).json({
                error: err,
            });
        }
    }

    async addProductForElastic(req: Request, res: Response) {

        try {
          const productObj = req.body;  
          const product = await this.productService.addProductForElastic(productObj);
          res.status(200).json({
            result: product,
            msg: 'Product added successfully',
        });
        } catch(err){
            console.log(err);
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



