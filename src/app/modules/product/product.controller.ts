import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import ProductValidationSchema from "./product.validation";
import { z } from "zod";

async function createProduct(req: Request, res: Response) {
    const data = req.body

    try {
        const zodParsedData = ProductValidationSchema.parse(data);
        const result = await ProductServices.createProductIntoDb(zodParsedData);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'product created successfully!',
                data: result,
            });

        } else {
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }

    } catch (error) {

        if (error instanceof z.ZodError) {
            res.status(400).json({
                success: false,
                message: 'validation failed.',
                error: error.errors
            });

        } else {
            res.status(400).json({
                success: false,
                message: 'Something wrong!',
                error: error
            });
        };
    };
};

async function getProduct(req: Request, res: Response) {
    const searchTerm = req.query.searchTerm;

    try {
        const result = await ProductServices.getProductsFromDb(searchTerm as string | undefined);

        if (!result?.length) {
            res.status(400).json({
                success: false,
                message: 'Your search did not match any data stored in our database!',
                data: result
            });

        } else if (result) {
            res.status(200).json({
                success: true,
                message: 'Products fetched successfully!',
                data: result
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

async function getProductBySearchParams(req: Request, res: Response) {
    const productId = req.params.productId;

    try {
        const result = await ProductServices.getProductBySearchParamsFromDb(productId);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'Products fetched successfully!',
                data: result
            });

        } else {
            res.status(500).json({
                success: false,
                message: `Invalid Product ID: ${productId}`,
                data: null,
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

async function updateProductBySearchParams(req: Request, res: Response) {
    const productId = req.params.productId;
    const updatedData = req.body;

    try {
        const zodParsedData = ProductValidationSchema.parse(updatedData);
        const result = await ProductServices.updateProductBySearchParamsFromDb(productId, zodParsedData);

        if (result) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: result
            });

        } else {
            res.status(500).json({
                success: false,
                message: `Unable to Update Product Info. Invalid Product ID: ${productId}`,
                data: null,
            });
        }

    } catch (error) {

        if (error instanceof z.ZodError) {
            res.status(400).json({
                success: false,
                message: 'validation failed.',
                error: error.errors,
            });

        } else {

            res.status(400).json({
                success: false,
                message: 'Something wrong!',
                error: error,
            });
        };
    };
};

async function deleteProductBySearchParams(req: Request, res: Response) {
    const productId = req.params.productId;

    try {
        const result = await ProductServices.deleteProductBySearchParamsFromDb(productId);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'Product deleted successfully!',
                data: null
            });

        } else {
            res.status(500).json({
                success: false,
                message: `Unable to Delete Product. Invalid Product ID: ${productId}`,
                data: null,
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
        });
    }

}

export const ProductController = { createProduct, getProduct, getProductBySearchParams, updateProductBySearchParams, deleteProductBySearchParams };