
import Product, { ProductInterface } from "../model/product";
import { ProductRepoInterface } from "../repo/product";
export interface ProductServiceInterface {
    getById(id:string): Promise<ProductInterface | null>;
    get(): Promise<ProductInterface[]>;
    addProduct(product: ProductInterface): any;
    deleteProduct(id: number): Promise<ProductInterface>;
}

export class ProductService implements ProductServiceInterface {
       
     constructor(public productRepo: ProductRepoInterface) {
              this.productRepo = productRepo;  
     }
    getById(id: string): Promise<ProductInterface | null> {
       return this.productRepo.getById(id);
    }
    get(): Promise<ProductInterface[]> {
        return this.productRepo.get();
    }
    addProduct(product: ProductInterface):any {
        return this.addProduct(product);
    }
    deleteProduct(id: number): Promise<ProductInterface> {
        throw new Error("Method not implemented.");
    }

}

export const newProductService = async (productRepo: ProductRepoInterface): Promise<ProductService> => {
          return new ProductService(productRepo);
};