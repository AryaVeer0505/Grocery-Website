import express from 'express'
import authUser from '../Middlewares/authUser.js'
import { getAllOrders, getUserOrders, placeOrderCod, placeOrderStripe } from '../Controller/orderController.js'
import authSeller from '../Middlewares/authSeller.js'


const orderRouter=express.Router()

orderRouter.post('/cod',authUser,placeOrderCod)
orderRouter.get('/user',authUser,getUserOrders)
orderRouter.get('/seller',authSeller,getAllOrders)
orderRouter.post('/stripe',authUser,placeOrderStripe)

export default orderRouter