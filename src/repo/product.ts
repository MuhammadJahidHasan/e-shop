import Product, {ProductInterface} from "../model/product";

export interface ProductRepoInterface {
    getById(id:string): Promise<ProductInterface | null>;
    get(): Promise<ProductInterface[]>;
    addProduct(product: ProductInterface): Promise<ProductInterface>;
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
    async addProduct(product: ProductInterface):Promise<ProductInterface> {
        const newProduct = await Product.create({
            title: product.title,
            description: product.description,
            price: product.price,
            brand: product.brand,
            category: product.category

        });
        newProduct.save();
        return newProduct;
    }
    deleteProduct(id: number): Promise<ProductInterface> {
        throw new Error("Method not implemented.");
    }

}

export const newProductRepo = async (): Promise<ProductRepoInterface> => {
    return new ProductRepo();
}