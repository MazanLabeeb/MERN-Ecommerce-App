import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import colors from 'colors';
import connectDB from "./config/db.js";



// data.js
import users from './data/users.js';
import products from './data/products.js';


// models
import User from './models/user.model.js';
import Product from './models/product.model.js';
import Order from './models/order.model.js';

(async ()=>{await connectDB()})();


const importData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;


        const sampleProducts = products.map(products => {
            return { ...products, user: adminUser }
        })

        await Product.insertMany(sampleProducts);

        console.log("✅ Data Imported". green.inverse);
        process.exit();
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}



const destroyData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("☑️ Data Destroyed". red.inverse);
        process.exit();
    }catch(error){
        console.log(error.red);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData();
}