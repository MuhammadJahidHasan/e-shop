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
exports.newProductRepo = exports.ProductRepo = void 0;
const product_1 = __importDefault(require("../model/product"));
class ProductRepo {
    constructor() { }
    getById(id) {
        return product_1.default.findOne({
            where: {
                id: id
            }
        });
    }
    get() {
        return product_1.default.findAll();
    }
    addProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = yield product_1.default.create({
                title: product.title,
                description: product.description,
                price: product.price,
                brand: product.brand,
                category: product.category
            });
            newProduct.save();
            return newProduct;
        });
    }
    deleteProduct(id) {
        throw new Error("Method not implemented.");
    }
}
exports.ProductRepo = ProductRepo;
const newProductRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    return new ProductRepo();
});
exports.newProductRepo = newProductRepo;
