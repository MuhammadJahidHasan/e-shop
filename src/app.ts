import { newRouter } from './router/index';
import { newProductController } from './controller/productController';
import { newProductService } from './services/product';
import { newProductRepo } from './repo/product';
import express from 'express';
import dotenv from 'dotenv';
import {initializeMySqlConnection} from './infra/sequelize'
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
app.use(express.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
(async () => {

    initializeMySqlConnection();

    const productRepo = await newProductRepo();
    
    const productService = await newProductService(productRepo);

    const productController = await newProductController(productService);

    const router = await newRouter(productController);

    app.use('/api', router);
    console.log('test');

})();




app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});





