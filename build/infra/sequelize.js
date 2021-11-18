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
exports.initializeMySqlConnection = exports.ConnectDb = void 0;
const sequelize_1 = require("sequelize");
class ConnectDb {
    static initialize() {
        return new sequelize_1.Sequelize('e_shop', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });
    }
    static getInstance() {
        if (ConnectDb.instance) {
            return this.instance;
        }
        this.instance = ConnectDb.initialize();
        return this.instance;
    }
}
exports.ConnectDb = ConnectDb;
const newSequelize = () => {
    return ConnectDb.getInstance();
};
const initializeMySqlConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield newSequelize().authenticate();
        console.log('Database connection established successfully');
    }
    catch (err) {
        console.log('Unable to connect database', err);
    }
});
exports.initializeMySqlConnection = initializeMySqlConnection;
exports.default = newSequelize;
