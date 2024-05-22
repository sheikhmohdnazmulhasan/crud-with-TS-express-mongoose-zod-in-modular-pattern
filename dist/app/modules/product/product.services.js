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
exports.ProductServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
function createProductIntoDb(product) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield product_model_1.default.create(product);
            if (result)
                return result;
        }
        catch (error) {
            console.log(error);
        }
        ;
    });
}
;
function getProductsFromDb(searchTerm) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (searchTerm) {
                const result = yield product_model_1.default.find();
                const filteredData = result.filter(i => {
                    const words = i.name.split(' ');
                    return words.some(word => word.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
                });
                if (filteredData)
                    return filteredData;
            }
            else {
                const result = yield product_model_1.default.find();
                if (result)
                    return result;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
function getProductBySearchParamsFromDb(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield product_model_1.default.findById(productId);
            if (result)
                return result;
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
function updateProductBySearchParamsFromDb(productId, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield product_model_1.default.findByIdAndUpdate(productId, updatedData);
            if (result)
                return result;
        }
        catch (error) {
            console.log(error);
        }
        ;
    });
}
;
function deleteProductBySearchParamsFromDb(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield product_model_1.default.findByIdAndDelete(productId);
            if (result)
                return result;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.ProductServices = { createProductIntoDb, getProductsFromDb, getProductBySearchParamsFromDb, updateProductBySearchParamsFromDb, deleteProductBySearchParamsFromDb };
