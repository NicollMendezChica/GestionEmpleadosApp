const { Router } = require('express');
const router = Router();

var controllerAdministrador = require('../controllers/controllerAdministrador');
router.get('/prueba', controllerAdministrador.prueba);

module.exports = router;