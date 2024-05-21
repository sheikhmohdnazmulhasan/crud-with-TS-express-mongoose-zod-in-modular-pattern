import { Product } from "./product.interface";
import ProductModel from "./product.model";

async function createProductIntoDb(product: Product) {

    try {
        const result = await ProductModel.create(product);
        if (result) return result

    } catch (error) {
        console.log(error);
    };
};

async function getProductsFromDb() {

    try {
        const result = await ProductModel.find();
        if (result) return result

    } catch (error) {
        console.log(error);
    }
};

async function getProductBySearchParamsFromDb(productId: string) {

    try {
        const result = await ProductModel.findById(productId);
        if (result) return result;

    } catch (error) {
        console.log(error);
    }
}




export const ProductServices = { createProductIntoDb, getProductsFromDb, getProductBySearchParamsFromDb };