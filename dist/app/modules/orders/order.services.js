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
exports.OrderServices = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
function createOrderIntoDb(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const { productId, quantity } = order;
        try {
            const product = yield product_model_1.default.findById(productId);
            if (product) {
                if (product.inventory.quantity < quantity) {
                    return { status: 200, success: false, message: 'Insufficient quantity available in inventory!', data: null };
                }
                else {
                    const updatedProductQuantity = product.inventory.quantity - quantity;
                    let inStock = true;
                    if (updatedProductQuantity < 1) {
                        inStock = false;
                    }
                    const updatedInventory = { quantity: updatedProductQuantity, inStock };
                    const updateProduct = yield product_model_1.default.findByIdAndUpdate(productId, { inventory: updatedInventory });
                    if (updateProduct) {
                        // final operation
                        const result = yield order_model_1.default.create(order);
                        if (result)
                            return { status: 200, success: true, message: 'Order created successfully!', data: result };
                    }
                }
            }
            else {
                return { status: 400, success: false, message: `Unable to place order. Invalid Product ID: ${productId}`, data: null };
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
function getAllOrdersFromDb(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (email) {
                const result = yield order_model_1.default.find({ email });
                if (result)
                    return result;
            }
            else {
                const result = yield order_model_1.default.find();
                if (result)
                    return result;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.OrderServices = { createOrderIntoDb, getAllOrdersFromDb };
