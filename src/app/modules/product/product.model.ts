import mongoose from "mongoose";


const variantSchema = new mongoose.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

const inventorySchema = new mongoose.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true }
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel
