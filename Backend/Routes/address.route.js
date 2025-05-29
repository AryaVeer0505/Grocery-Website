import express from 'express'
import authUser from '../Middlewares/authUser.js'
import { addAddress, getAddress } from '../Controller/addressController.js'

const addressRouter=express.Router()

addressRouter.post('/add',authUser,addAddress)
addressRouter.get('/get',authUser,getAddress)

export default addressRouter