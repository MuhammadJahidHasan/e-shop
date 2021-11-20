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
exports.newRouter = void 0;
const express_1 = require("express");
const productRouter_1 = require("./productRouter");
const newRouter = (productController) => __awaiter(void 0, void 0, void 0, function* () {
    const v1 = (0, express_1.Router)();
    v1.use("/product", yield (0, productRouter_1.newProductRouter)(productController));
    return v1;
});
exports.newRouter = newRouter;
