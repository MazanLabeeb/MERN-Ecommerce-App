const express = require("express");
const app = new express();
const PORT = process.env.PORT || 8080;
const {products} = require("./data/products");

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




const onStartHttp = () => {
    console.log(`Server Started: http://localhost:${PORT}`);
}
app.listen( PORT, onStartHttp );