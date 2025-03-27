import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDb=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGOD_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDb connection error",error)
        
    }
}

export default connectDb