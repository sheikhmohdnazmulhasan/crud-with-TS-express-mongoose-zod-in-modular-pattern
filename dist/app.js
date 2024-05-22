"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/product/product.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
// parser;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// startup endpoint
app.get('/', (req, res) => {
    res.send('Yeeeye! Assignment-2 is running');
});
// application route;
app.use('/api', product_route_1.ProductRoute);
app.use('/api', order_route_1.OrderRoute);
// invalid endpoint checker;
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
