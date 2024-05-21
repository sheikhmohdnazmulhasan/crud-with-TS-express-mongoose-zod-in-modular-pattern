import mongoose from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new mongoose.Schema<Order>({
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
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

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;