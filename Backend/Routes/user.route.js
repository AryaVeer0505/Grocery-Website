import express from 'express'
const userRouter=express.Router()
import { register,login, isAuth, logout } from '../Controller/UserController.js'
import authUser from '../Middlewares/authUser.js'
userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/isAuth',authUser,isAuth)
userRouter.get('/logout',authUser,logout)

export default userRouter