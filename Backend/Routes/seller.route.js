import express from 'express'
const sellerRouter=express.Router()
import { sellerLogin, isSellerAuth, sellerLogout } from '../Controller/SellerController.js'
import authSeller from '../Middlewares/authSeller.js'

sellerRouter.post('/login',sellerLogin)
sellerRouter.get('/isAuth',authSeller,isSellerAuth)
sellerRouter.get('/logout',sellerLogout)
export default sellerRouter