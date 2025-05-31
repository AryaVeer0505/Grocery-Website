import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './configs/db.js'
import 'dotenv/config'
import userRouter from './Routes/user.route.js'
import sellerRouter from './Routes/seller.route.js'
import connectCloudinary from './configs/cloudinary.js'
import productRouter from './Routes/product.route.js'
import cartRouter from './Routes/cart.route.js'
import addressRouter from './Routes/address.route.js'
import orderRouter from './Routes/order.route.js'
import { stripeWebHooks } from './Controller/orderController.js'
const app=express()
app.use(express.json())
const allowedOrigins=["http://localhost:5173","https://grocery-website-frontend.onrender.com"]
const port=process.env.PORT || 4000

await connectDB()

await connectCloudinary()

app.post('/stripe',express.raw({type:'application/json'}),stripeWebHooks)



// Middlewares 



app.use(cookieParser())

app.use(cors({
    origin:allowedOrigins,
    credentials:true
}))

// Routes

app.use("/api/user",userRouter)

app.use("/api/seller",sellerRouter)

app.use("/api/product",productRouter)

app.use("/api/cart",cartRouter)

app.use("/api/address",addressRouter)

app.use("/api/order",orderRouter)

app.get('/',(req,res)=>res.send("Api working"))

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

