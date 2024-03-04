import express from 'express'
import dotenv from 'dotenv'
import { db } from './config/db.js'
import router from './routes/fileRoutes.js'
import cors from 'cors'

dotenv.config()

const app =express()
const PORT =process.env.PORT || PORT
db()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',router)



app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})