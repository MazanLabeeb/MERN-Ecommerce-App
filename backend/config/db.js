import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB =  () => new Promise((resolve, reject)=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>resolve("✅ Connection to database: Successful"))
    .catch((error)=>reject(`❌ Connection to database: Failed \nERROR: ${error}`));
})



export default connectDB;
