const express = require("express");
const { dbConnection } = require("./database/config");
require('dotenv').config();
const app = express();
dbConnection();


app.use(express.static('public'));
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/clientes', require('./routes/clientes'));




app.listen(process.env.PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
    
})