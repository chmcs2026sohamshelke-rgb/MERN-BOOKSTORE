import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors"

dotenv.config()
const app=express();
const port=process.env.port ||3001
app.use(cors())
// app.get('/',(req,res)=>{
//     res.status(200).json("Hello!")
//     console.log('hello')
// })
// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`)
// })
app.use(express.json())
app.use("/books",bookRoutes)
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}/books`)
    })
})
