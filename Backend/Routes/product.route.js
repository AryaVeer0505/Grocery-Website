import express from 'express'
import { upload } from '../configs/multer.js'
const productRouter=express.Router()
import { addProduct, changeStock, productById, productList } from '../Controller/productController.js'
import authSeller from '../Middlewares/authSeller.js'
productRouter.post('/add',upload.array(["images"]),authSeller,addProduct)
productRouter.get('/list',productList)
productRouter.get('/id',productById)
productRouter.post('/stock',authSeller,changeStock)

export default productRouter