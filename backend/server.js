import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = new express();

import colors from "colors";
import connectDB from "./config/db.js";
import router from "./routes/products.routes.js";
import { customErrorHandler, notFound } from "./middlewares/error.middleware.js";


// ROUTES
app.use("/api/products", router);
app.use("/api/products/:id", router);

app.get('/', (req, res) => {
    res.send("Forbidden");
})




app.use(notFound);
app.use(customErrorHandler);



const PORT = process.env.PORT || 8080;

const onStartHttp = (message) => {
    console.log(`${message} \n✅ Server Status: Running`.green.bold);
    console.log(`http://localhost:${PORT}\nNode Environment: ${process.env.NODE_ENV}`.yellow);
}

connectDB().then((message) => {
    app.listen(PORT, onStartHttp(message));
}).catch(error => {
    console.error(error.red.bold);
})
