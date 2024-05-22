import { z } from "zod";

const ProductValidationSchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1),
    price: z.number().positive(),
    category: z.string().min(1),
    tags: z.array(z.string()).min(1),
    variants: z.array(z.object({
        type: z.string().min(1),
        value: z.string().min(1)
    })),
    inventory: z.object({
        quantity: z.number().min(0),
        inStock: z.boolean()
    })
});

// Define a type for the product data
// type ProductData = z.infer<typeof ProductSchema>;

export default ProductValidationSchema;
