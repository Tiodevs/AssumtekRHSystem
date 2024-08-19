import "reflect-metadata"
import { DataSource } from "typeorm"
import { ProductsEntity } from "../entity/ProductsEntity"
import { User } from "../entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "rh_station",
    synchronize: true,
    logging: false,
    entities: [ProductsEntity, User],
    migrations: [],
    subscribers: [],
    dropSchema: true
})

export const ProductModelRepository = AppDataSource.getRepository(ProductsEntity)

export const UserModelRepository = AppDataSource.getRepository(User)
