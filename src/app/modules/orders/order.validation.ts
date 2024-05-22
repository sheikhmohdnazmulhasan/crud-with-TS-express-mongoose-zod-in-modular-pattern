import { z } from "zod";

const OrderValidationSchema = z.object({
    email: z.string().email(),
    productId: z.string(), // Assuming productId is a UUID
    price: z.number().positive(),
    quantity: z.number().min(1)
});


export default OrderValidationSchema;
