import { ProductModelRepository } from "../config/data-source"

export const getAllProductsServices = async () => {
    const products = await ProductModelRepository.find()
    return products
}