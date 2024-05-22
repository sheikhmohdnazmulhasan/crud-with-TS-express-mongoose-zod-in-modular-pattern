"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(255),
    description: zod_1.z.string().min(1),
    price: zod_1.z.number().positive(),
    category: zod_1.z.string().min(1),
    tags: zod_1.z.array(zod_1.z.string()).min(1),
    variants: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.string().min(1),
        value: zod_1.z.string().min(1)
    })),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number().min(0),
        inStock: zod_1.z.boolean()
    })
});
// Define a type for the product data
// type ProductData = z.infer<typeof ProductSchema>;
exports.default = ProductValidationSchema;
