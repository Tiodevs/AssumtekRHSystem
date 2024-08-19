import { Request, Response } from "express"
import { getAllProductsServices } from "../services/productsServices"

export const getAllProductsController = async (req: Request, res: Response) => {
    const products = await getAllProductsServices()
    res.json(products)
    console.log(products)
    return products
}