import express from 'express'
import dotenv from 'dotenv'
import { db } from './config/db.js'

dotenv.config()
const app =express()
const PORT =process.env.PORT || PORT
db()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.json('hello')
})

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})