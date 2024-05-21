import { Order } from "./order.interface";
import OrderModel from "./order.model";

async function createOrderIntoDb(order: Order) {
    // const { productId } = order;

    try {
        const result = await OrderModel.create(order);
        if (result) return result

    } catch (error) {
        console.log(error);
    }
};

export const OrderServices = { createOrderIntoDb } 