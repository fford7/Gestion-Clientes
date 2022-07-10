const express = require('express');
//const { Response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');



const crearUsuario = async (req, res = express.response) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe"
            });
        }
        usuario = new Usuario(req.body);
        //Encripto la contraseña del usuario
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        return res.status(200).json({
            message: "Creacion del usuario realizada",
            //user: req.body
            name, email
        });
    } catch (error) {
        res.status(500).json({
            message: "No pudimos crear el usuario, contacte al administrador",
            "error": error
        })
    }


}

const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: "Usuario o contraseña incorrectos"
            });
        }

        const validarPassword = bcrypt.compareSync(password, usuario.password)

        if (!validarPassword) {
            return res.status(400).json({
                ok: false,
                msg: "Usuario o contraseña incorrectos"
            });
        }

        res.json({
            message: "Bienvenidos a nuestra API - Login"
        })
    } catch (error) {
        res.status(500).json({
            message: "No pudimos loguear el usuario, por favor contacte al administrador ",
            "error": error
        })
    }

};



module.exports = {
    loginUsuario,
    crearUsuario
    
};