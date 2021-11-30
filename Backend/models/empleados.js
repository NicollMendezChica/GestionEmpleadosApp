var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema=Schema({
        usuario:String,
        contraseña:String
    });

const Empleado= mongoose.model('Empleado',EmpleadoSchema);
module.exports= Empleado;