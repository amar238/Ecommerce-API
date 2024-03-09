const express = require('express');
const productRouter= require('./src/features/product/routes/index.product.routes');
const server = express();

server.use("/api/products",productRouter);
const db = require('./src/middlewares/mongoose')


// to change
server.listen(3200);

