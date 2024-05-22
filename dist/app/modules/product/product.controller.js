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
exports.ProductController = void 0;
const product_services_1 = require("./product.services");
const product_validation_1 = __importDefault(require("./product.validation"));
const zod_1 = require("zod");
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const zodParsedData = product_validation_1.default.parse(data);
            const result = yield product_services_1.ProductServices.createProductIntoDb(zodParsedData);
            if (result) {
                res.status(200).json({
                    success: true,
                    message: 'product created successfully!',
                    data: result,
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    message: "internal server error",
                });
            }
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                res.status(400).json({
                    success: false,
                    message: 'validation failed.',
                    error: error.errors
                });
            }
            else {
                res.status(400).json({
                    success: false,
                    message: 'Something wrong!',
                    error: error
                });
            }
            ;
        }
        ;
    });
}
;
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchTerm = req.query.searchTerm;
        try {
            const result = yield product_services_1.ProductServices.getProductsFromDb(searchTerm);
            if (!(result === null || result === void 0 ? void 0 : result.length)) {
                res.status(400).json({
                    success: false,
                    message: 'Your search did not match any data stored in our database!',
                    data: result
                });
            }
            else if (result) {
                res.status(200).json({
                    success: true,
                    message: 'Products fetched successfully!',
                    data: result
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    message: "internal server error",
                });
            }
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: 'Something wrong!',
                error: error
            });
        }
    });
}
;
function getProductBySearchParams(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = req.params.productId;
        try {
            const result = yield product_services_1.ProductServices.getProductBySearchParamsFromDb(productId);
            if (result) {
                res.status(200).json({
                    success: true,
                    message: 'Products fetched successfully!',
                    data: result
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    message: `Invalid Product ID: ${productId}`,
                    data: null,
                });
            }
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: 'Something wrong!',
                error: error
            });
        }
    });
}
;
function updateProductBySearchParams(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = req.params.productId;
        const updatedData = req.body;
        try {
            const zodParsedData = product_validation_1.default.parse(updatedData);
            const result = yield product_services_1.ProductServices.updateProductBySearchParamsFromDb(productId, zodParsedData);
            if (result) {
                res.status(200).json({
                    success: true,
                    message: "Product updated successfully!",
                    data: result
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    message: `Unable to Update Product Info. Invalid Product ID: ${productId}`,
                    data: null,
                });
            }
        }
        catch (error) {
            if (error instanceof zod_1.z.ZodError) {
                res.status(400).json({
                    success: false,
                    message: 'validation failed.',
                    error: error.errors,
                });
            }
            else {
                res.status(400).json({
                    success: false,
                    message: 'Something wrong!',
                    error: error,
                });
            }
            ;
        }
        ;
    });
}
;
function deleteProductBySearchParams(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const productId = req.params.productId;
        try {
            const result = yield product_services_1.ProductServices.deleteProductBySearchParamsFromDb(productId);
            if (result) {
                res.status(200).json({
                    success: true,
                    message: 'Product deleted successfully!',
                    data: null
                });
            }
            else {
                res.status(500).json({
                    success: false,
                    message: `Unable to Delete Product. Invalid Product ID: ${productId}`,
                    data: null,
                });
            }
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    });
}
exports.ProductController = { createProduct, getProduct, getProductBySearchParams, updateProductBySearchParams, deleteProductBySearchParams };
