import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB =  () => new Promise((resolve, reject)=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>resolve("✅ Connection to database: Successful"))
    .catch((error)=>reject(`❌ Connection to database: Failed \n ERROR: ${error}`));
})



export default connectDB;
