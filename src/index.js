// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'
import connectDb from './db/index.js';

dotenv.config({
    path:'./env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT ||6000,()=>{
        console.log(`Server is running on ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("mongo db connection failed",err);
    
})











/*
import express from "express"

const app =express()

(async ()=>{
    try {
     await mongoose.connect(`${process.env.MONGOD_URI}/${DB_NAME}`)
     app.on("error: ",(error)=>{
        console.log("Error",error)
        throw error
     }) 
     
     app.listen(process.env.PORT,()=>{
        console.log(`App is running on port ${process.env.PORT}`)
     })
    } catch (error) {
        console.log(error)
        throw error
    }
})()

*/