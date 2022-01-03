
import { SearchResponse } from "@elastic/elasticsearch/api/types";
import Product, { ProductInterface } from "../model/product";
import { ProductRepoInterface } from "../repo/product";
export interface ProductServiceInterface {
    getById(id:string): Promise<ProductInterface | null>;
    get(): Promise<ProductInterface[]>;
    getElasticProduct():Promise<SearchResponse<ProductInterface>>;
    addProduct(product: ProductInterface): Promise<ProductInterface>;
    addProductForElastic(product: ProductInterface):Promise<SearchResponse<ProductInterface>>;
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
   async getElasticProduct():Promise<SearchResponse<ProductInterface>> {
        return await this.productRepo.getElasticProduct();
    }
    addProduct(product: ProductInterface):Promise<ProductInterface>  {
        return this.productRepo.addProduct(product);
    }
    addProductForElastic(product: ProductInterface):Promise<SearchResponse<ProductInterface>>  {
        return this.productRepo.addProductForElastic(product);
    }
    deleteProduct(id: number): Promise<ProductInterface> {
        throw new Error("Method not implemented.");
    }

}

export const newProductService = async (productRepo: ProductRepoInterface): Promise<ProductService> => {
          return new ProductService(productRepo);
};