import { AddProduct, GetProducts } from './Controllers/ProductController';

const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 


app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.json());

app.listen(80, () => { 
    console.log('Server Started!') // Log when listen success
})

app.get('/products', GetProducts)
app.post('/addProduct', AddProduct)