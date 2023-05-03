import { SearchResponse } from "@elastic/elasticsearch/api/types";
import newClient from "../infra/es_client";
import Product, {ProductInterface} from "../model/product";

export interface ProductRepoInterface {
    getById(id:string): Promise<ProductInterface | null>;
    get(): Promise<ProductInterface[]>;
    getElasticProduct():Promise<SearchResponse<ProductInterface>>;
    addProduct(product: ProductInterface): Promise<ProductInterface>;
    addProductForElastic(product: ProductInterface):Promise<SearchResponse<ProductInterface>> ;
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
    async get(): Promise<ProductInterface[]> {
          
          const product = await Product.findAll();
          console.log('user repo new');
          return product;
    }

    async getElasticProduct():Promise<SearchResponse<ProductInterface>> {
        console.log('add a commit in product branch');
        const  {body} = await newClient().search({
            index: 'products'
        });

        return body as SearchResponse<ProductInterface>
    }
    async addProduct(product: ProductInterface):Promise<ProductInterface>{

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

    async addProductForElastic(product: ProductInterface):Promise<SearchResponse<ProductInterface>> {
       console.log('add product elastic');
       const {body} =  await newClient().index({
                   index: 'products',
                   body: product
        });

        return body as SearchResponse<ProductInterface>;
    }


    deleteProduct(id: number): Promise<ProductInterface> {
        throw new Error("Method not implemented.");
    }
}

export const newProductRepo = async (): Promise<ProductRepoInterface> => {
    return new ProductRepo();
}