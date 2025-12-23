import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";  
import connectDB from "./db/index.js";

connectDB();





// import express from "express"; 
// const app = express();

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("Error", (error)=>{
//             console.log("Error connecting to the database", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }catch(error){
//         console.log("Error connecting to the database", error);
//         throw error;
//     }
// })()