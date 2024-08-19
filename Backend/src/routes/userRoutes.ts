import { Router } from "express";
import { creatUser, getAllUsersController, loginUserController } from "../controllers/usersControllers";

const userRoutes = Router()

userRoutes.get("/", getAllUsersController)
userRoutes.post("/", creatUser)
userRoutes.post("/login", loginUserController)

export default userRoutes