import express from "express"

import userRouter from './router/user.router.js'

const app = express()

app.use(express.json())

app.use('/users', userRouter) 

app.listen(5000, () => console.log('*5000'))
