import { Request, Response } from "express";
import { ProductServices } from "./product.services";

async function createProduct(req: Request, res: Response) {
    const data = req.body

    try {
        const result = await ProductServices.createProductIntoDb(data);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'product created successfully!',
                data: data,
            });
        };

    } catch (error) {

        res.status(400).json({
            success: false,
            message: 'Something wrong!',
            error: error
        });
    }
};

export const ProductController = { createProduct };