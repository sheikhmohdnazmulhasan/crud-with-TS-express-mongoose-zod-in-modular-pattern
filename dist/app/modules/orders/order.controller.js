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
exports.OrderControllers = void 0;
const order_services_1 = require("./order.services");
const order_validation_1 = __importDefault(require("./order.validation"));
const zod_1 = require("zod");
function createOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        try {
            const zodParsedData = order_validation_1.default.parse(data);
            console.log(zodParsedData);
            const result = yield order_services_1.OrderServices.createOrderIntoDb(data);
            if (result) {
                res.status(result.status).json({
                    success: result === null || result === void 0 ? void 0 : result.success,
                    message: result === null || result === void 0 ? void 0 : result.message,
                    data: result === null || result === void 0 ? void 0 : result.data,
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
    });
}
;
function getAllOrders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.query.email;
        try {
            const result = yield order_services_1.OrderServices.getAllOrdersFromDb(email);
            if (!(result === null || result === void 0 ? void 0 : result.length)) {
                res.status(404).json({
                    success: false,
                    message: 'Order not found',
                });
            }
            else if (result) {
                res.status(200).json({
                    success: true,
                    message: 'Orders fetched successfully',
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
            res.status(400).json({
                success: false,
                message: 'Something wrong!',
                error: error
            });
        }
    });
}
exports.OrderControllers = { createOrder, getAllOrders };
