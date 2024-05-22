import { Request, Response } from "express";
import { OrderServices } from "./order.services";

async function createOrder(req: Request, res: Response) {
    const data = req.body;

    try {
        const result = await OrderServices.createOrderIntoDb(data);

        if (result) {
            res.status(result.status).json({
                success: result?.success,
                message: result?.message,
                data: result?.data,
            });

        } else {
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }

    } catch (error) {

        res.status(400).json({
            success: false,
            message: 'Something wrong!',
            error: error
        });
    }

};

async function getAllOrders(req: Request, res: Response) {
    const email = req.query.email;

    try {
        const result = await OrderServices.getAllOrdersFromDb(email as string | undefined);
        if (!result?.length) {
            res.status(404).json({
                success: false,
                message: 'Order not found',
            });

        } else if (result) {
            res.status(200).json({
                success: true,
                message: 'Orders fetched successfully',
                data: result,
            });

        } else {
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Something wrong!',
            error: error
        });
    }
}

export const OrderControllers = { createOrder, getAllOrders }