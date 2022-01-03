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
exports.newProductRouter = void 0;
const express_1 = require("express");
const newProductRouter = (productController) => __awaiter(void 0, void 0, void 0, function* () {
    const router = (0, express_1.Router)();
    // router.get('/', productController.getProduct);
    //router.get('/:id', productController.getProductById);
    router.post('/', productController.addProduct);
    router.post('/elastic', productController.addProductForElastic);
    router.get('/elastic', productController.getElasticProduct);
    return router;
});
exports.newProductRouter = newProductRouter;
