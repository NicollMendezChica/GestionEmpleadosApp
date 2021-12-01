var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema=Schema({
        cargo:String,
        salario:Number
    });

const Empleado= mongoose.model('Empleado',EmpleadoSchema);
module.exports= Empleado;