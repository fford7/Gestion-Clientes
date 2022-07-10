const express = require('express');
const router = express.Router();
const {
    crearUsuario,
    loginUsuario
   
} = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

router.post('/login',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);
router.post('/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario);



module.exports = router;