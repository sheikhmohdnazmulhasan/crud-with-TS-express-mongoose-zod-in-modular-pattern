import mongoose from "mongoose";

export interface Order {
    email: string;
    // productId: string;
    productId: mongoose.Schema.Types.ObjectId;
    price: number;
    quantity: number;
}