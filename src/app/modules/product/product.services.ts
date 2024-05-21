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

async function getProductsFromDb(searchTerm: string | undefined) {

    try {

        if (searchTerm) {
            const result = await ProductModel.find();

            const filteredData = result.filter(i => {
                const words = i.name.split(' ');
                return words.some(word => word.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
            });

            if (filteredData) return filteredData

        } else {
            const result = await ProductModel.find();
            if (result) return result
        }

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
};

async function updateProductBySearchParamsFromDb(productId: string, updatedData: Product) {

    try {
        const result = await ProductModel.findByIdAndUpdate(productId, updatedData);
        if (result) return result;

    } catch (error) {
        console.log(error);
    };

};

async function deleteProductBySearchParamsFromDb(productId: string) {

    try {
        const result = await ProductModel.findByIdAndDelete(productId);
        if (result) return result;

    } catch (error) {
        console.log(error);

    }
}


export const ProductServices = { createProductIntoDb, getProductsFromDb, getProductBySearchParamsFromDb, updateProductBySearchParamsFromDb, deleteProductBySearchParamsFromDb };