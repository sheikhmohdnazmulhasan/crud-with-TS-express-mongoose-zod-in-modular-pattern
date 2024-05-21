import mongoose from "mongoose";
import { Product } from "./product.interface";


const productSchema = new mongoose.Schema<Product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [
        {
            type: { type: String, required: true },
            value: { type: String, required: true }
        }
    ],
    inventory: {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true }
    }
});


const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel
