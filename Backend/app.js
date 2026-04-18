import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from "./error/error.js"
import reservationRouter from "./routes/reservationRoute.js";
const app = express();
dotenv.config({path:"./config/config.env"});

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods:["POST"],
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation",reservationRouter);


dbConnection();
app.use(errorMiddleware);
export default app;
