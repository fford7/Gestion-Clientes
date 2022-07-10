const { response } = require('express');
const express = require('express');
const router = express.Router();
const cliente = require('../models/Clientes');


const saveCustomer = (req, res) =>{

    const { nombre, apellido, email, telefono } = req.body;
    let Cliente = new cliente(req.body);
    Cliente.save();
     return res.status(200).json({
        message: "cliente guardado",
        nombre, apellido, email, telefono  
    })
    
}
const removeCustomer = async(req, res) =>{
    const { nombre, apellido, email, telefono } = req.body;
   
        let Cliente = await cliente.findOne({ nombre, apellido });
        if (!Cliente) {
            return res.status(400).json({
                ok: false,
                msg: "No se encuentra el cliente"
            });
        }
        
        await cliente.deleteOne({apellido:Cliente.apellido}, {nombre:Cliente.nombre});
    
    return res.json({
       message: "Cliente eliminado"
   })
}
const getCustomer = (req, res) =>{
    let Clientes = cliente.findById(id);
    res.status(200).json(Clientes)
}
const getAllCustomer = (req, res) =>{
    
    let Clientes = cliente.find();
    res.status(200).json(Clientes)
}
   



module.exports = {
    saveCustomer,
    removeCustomer,
    getCustomer,
    getAllCustomer
}