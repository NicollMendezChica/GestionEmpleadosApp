const { Router } = require('express');
const router = Router();

var controllerAdministrador = require('../controllers/controllerAdministrador');
router.get('/prueba', controllerAdministrador.prueba);
router.post('/crearAdmin', controllerAdministrador.saveAdministrador);
router.get('/buscarAdmin/:id',controllerAdministrador.buscarAdministrador);
router.get('/listarAdmin/:id?',controllerAdministrador.listarAdministradores);
router.delete('/borraAdmin/:id',controllerAdministrador.deleteAdministrador);
router.put('/guardaAdmin/:id',controllerAdministrador.updateAdministrador);

var controllerEmpleado = require('../controllers/controllerEmpleado');
router.get('/pruebaE', controllerEmpleado.pruebaE);
router.post('/crearEmpleado', controllerEmpleado.saveEmpleado);
router.get('/buscarEmpleado/:id',controllerEmpleado.buscarEmpleado);
router.get('/listarEmpleado/:id?',controllerEmpleado.listarEmpleados);
router.delete('/borraEmpleado/:id',controllerEmpleado.deleteEmpleado);
router.put('/guardaEmpleado/:id',controllerEmpleado.updateEmpleado);

var controllerEmpresa = require('../controllers/controllerEmpresa');
router.get('/pruebaEm', controllerEmpresa.pruebaEm);
router.post('/crearEmpresa', controllerEmpresa.saveEmpresa);
router.get('/buscarEmpresa/:id',controllerEmpresa.buscarEmpresa);
router.get('/listarEmpresa/:id?',controllerEmpresa.listarEmpresa);
router.delete('/borraEmpresa/:id',controllerEmpresa.deleteEmpresa);
router.put('/guardaEmpresa/:id',controllerEmpresa.updateEmpresa);

var controllerPersona = require('../controllers/controllerPersona');
router.get('/pruebaP', controllerPersona.pruebaP);
router.post('/crearPersona', controllerPersona.savePersona);
router.get('/buscarPersona/:id',controllerPersona.buscarPersona);
router.get('/listarPersona/:id?',controllerPersona.listarPersonas);
router.delete('/borraPersona/:id',controllerPersona.deletePersona);
router.put('/guardaPersona/:id',controllerPersona.updatePersona);

module.exports = router;