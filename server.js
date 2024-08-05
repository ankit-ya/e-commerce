import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
console.log(colors.green('hello'));
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js'
import cors from "cors";
//import {categoryRoutes} from './routes/categoryRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'; // Default import
import productRoutes from "./routes/productRoutes.js";

//config env
dotenv.config();

// database config
connectDB();


// rest object 
 const app = express();

 // middlewares
 app.use(cors());

 app.use(express.json());
 app.use(morgan('dev'))

 //routes
 app.use('/api/v1/auth',authRoutes);
 app.use('/api/v1/category', categoryRoutes);
 app.use('/api/v1/product',productRoutes);

 //rest api
 app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to Your Shop",
    });
 });

 //Port
 const PORT = process.env.PORT || 8080 ;
 app.listen(PORT,()=>{
    console.log(`server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
 })