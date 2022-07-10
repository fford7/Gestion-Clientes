
const { Schema, model } = require('mongoose');

const clienteSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono:{
        type: Number,
        required: true
    }
})

module.exports = model('cliente', clienteSchema);

