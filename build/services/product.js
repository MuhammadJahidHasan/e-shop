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
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProductService = exports.ProductService = void 0;
class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
        this.productRepo = productRepo;
    }
    getById(id) {
        return this.productRepo.getById(id);
    }
    get() {
        return this.productRepo.get();
    }
    addProduct(product) {
        return this.addProduct(product);
    }
    deleteProduct(id) {
        throw new Error("Method not implemented.");
    }
}
exports.ProductService = ProductService;
const newProductService = (productRepo) => __awaiter(void 0, void 0, void 0, function* () {
    return new ProductService(productRepo);
});
exports.newProductService = newProductService;
