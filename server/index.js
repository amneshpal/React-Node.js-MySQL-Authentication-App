import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import dotenv from 'dotenv';
const app = express()
dotenv.config();

app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)
app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})


