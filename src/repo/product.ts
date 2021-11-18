import Product, {ProductInterface} from "../model/product";

export interface ProductRepoInterface {
    getById(id:string): Promise<ProductInterface | null>;
    get(): Promise<ProductInterface[]>;
    addProduct(product: ProductInterface): any;
    deleteProduct(id: number): Promise<ProductInterface>;
}

export class ProductRepo implements ProductRepoInterface {
       constructor() {}
    getById(id: string): Promise<ProductInterface | null> {
       return Product.findOne({
           where:{
               id:id
           }
       });
    }
    get(): Promise<ProductInterface[]> {
          
          return Product.findAll();
    }
    addProduct(product: ProductInterface) {
        const newProduct = Product.create(product);
        return newProduct;
    }
    deleteProduct(id: number): Promise<ProductInterface> {
        throw new Error("Method not implemented.");
    }

}

export const newProductRepo = async (): Promise<ProductRepoInterface> => {
    return new ProductRepo();
}