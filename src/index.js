import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./db";


connectDB()

connectDB();

mongoose.connect("http:S??")

import mongoose  from "mongoose";
export  const user =mongoose.model("User",)


// first approach 
// import express from "express"
// const app=express();
// ( async()=>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${
//             DB_NAME}`)
//             app.on("error",(error)=>{
//                 console.log("ERROR");
//                 throw error;
//             })

//         app.listen(process.env.port,()=>{  // callback
//             console.log(`app is listenting on port : ${process.env.port}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw err;
//     }

// })()