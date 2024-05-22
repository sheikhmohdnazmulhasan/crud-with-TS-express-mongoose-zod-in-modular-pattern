"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number']
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1']
    }
});
const OrderModel = mongoose_1.default.model('Order', orderSchema);
exports.default = OrderModel;
