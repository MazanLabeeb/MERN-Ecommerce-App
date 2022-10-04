import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = new express();

import colors from "colors";
import products from "./data/products.js";
import connectDB from "./config/db.js";


// ROUTES
app.get('/', (req, res)=>{
    res.send("Forbidden");
})

app.get('/api/products', (req, res)=> {
    res.json(products);
})

app.get('/api/products/:id', (req, res)=> {
    const filterProduct = products.filter(id=> id._id=== req.params.id )[0];
    res.json(filterProduct);
})


app.use((req, res)=>{
    res.send("Error 404! Page Not Found");
})

app.use((err, req, res, next)=>{
    res.status(500).send(`Error 500! Something went wrong.<br><b>Error: </b>${err.stack}`);
})





const PORT = process.env.PORT || 8080;

const onStartHttp = (message) => {
    console.log(`${message} \n✅ Server Status: Running`.green.bold);
    console.log(`http://localhost:${PORT}\nNode Environment: ${process.env.NODE_ENV}`.yellow);
}

connectDB().then((message)=>{
    app.listen( PORT, onStartHttp(message) );
}).catch(error=>{
    console.error(error.red.bold);
})
