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
exports.newProductController = exports.ProductController = void 0;
class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.getProduct = this.getProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.productService.getById(req.params.id);
                res.status(200).json({
                    result: data,
                });
            }
            catch (err) {
                res.status(500).json({
                    error: err,
                });
            }
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('get product test');
            try {
                const data = yield this.productService.get();
                res.status(200).json({
                    result: data,
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    error: err,
                });
            }
        });
    }
    addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.productService.addProduct(req.body);
                res.status(200).json({
                    result: product,
                    msg: 'Product added successfully',
                });
            }
            catch (err) {
                console.log(err);
                res.status(500).json({
                    error: err,
                });
            }
        });
    }
    deleteProduct(req, res) {
        throw new Error('Method not implemented.');
    }
}
exports.ProductController = ProductController;
const newProductController = (productService) => __awaiter(void 0, void 0, void 0, function* () {
    return new ProductController(productService);
});
exports.newProductController = newProductController;
