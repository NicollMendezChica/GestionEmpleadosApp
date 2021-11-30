const { Router } = require('express');
const router = Router();

var controllerAdministrador = require('../controllers/controllerAdministrador');
router.get('/prueba', controllerAdministrador.prueba);
router.post('/crearAdmin', controllerAdministrador.saveAdministrador);

var controllerEmpleado = require('../controllers/controllerEmpleado');
router.get('/pruebaE', controllerEmpleado.pruebaE);

var controllerEmpresa = require('../controllers/controllerEmpresa');
router.get('/pruebaEm', controllerEmpresa.pruebaEm);

var controllerPersona = require('../controllers/controllerPersona');
router.get('/pruebaP', controllerPersona.pruebaP);

module.exports = router;