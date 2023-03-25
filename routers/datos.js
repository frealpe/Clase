const Router = require('express');

const { crearDatos,
      } = require('../controllers/datos');


const router = Router();
 
//Obtener una Laboratorios por id-publico
router.post('/', [

], crearDatos); 

module.exports = router; 