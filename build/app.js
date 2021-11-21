"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./router/index");
const productController_1 = require("./controller/productController");
const product_1 = require("./services/product");
const product_2 = require("./repo/product");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("./infra/sequelize");
const body_parser_1 = __importDefault(require("body-parser"));
const sequelize_2 = __importDefault(require("./infra/sequelize"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
var urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, sequelize_1.initializeMySqlConnection)();
    yield (0, sequelize_2.default)().sync();
    const productRepo = yield (0, product_2.newProductRepo)();
    const productService = yield (0, product_1.newProductService)(productRepo);
    const productController = yield (0, productController_1.newProductController)(productService);
    const router = yield (0, index_1.newRouter)(productController);
    app.use('/api', router);
    console.log('test');
}))();
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});
