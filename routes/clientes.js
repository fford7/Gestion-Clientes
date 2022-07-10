const express = require('express');
const router = express.Router();
const {
    saveCustomer,
    removeCustomer,
    getCustomer,
    getAllCustomer
} = require('../controllers/clientes')


router.post('/', saveCustomer);
router.get('/:id', getCustomer); 
router.get('/', getAllCustomer); 
router.delete('/:id', removeCustomer);

module.exports = router;