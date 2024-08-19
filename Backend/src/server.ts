import express from "express";
import productsRoutes from "./routes/productsRoutes";
import userRoutes from "./routes/userRoutes";
import cors from 'cors';


const server = express()

// Habilita o CORS para todas as rotas
server.use(cors());

server.use(express.json());

server.use("/products", productsRoutes)
server.use("/user", userRoutes)


export default server

