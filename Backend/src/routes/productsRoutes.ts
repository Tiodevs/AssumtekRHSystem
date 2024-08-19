import { Router } from "express";
import { getAllProductsController } from "../controllers/productsControllers";
import { loginUserController } from "../controllers/usersControllers";


const productsRoutes = Router()

productsRoutes.get("/", loginUserController)

export default productsRoutes