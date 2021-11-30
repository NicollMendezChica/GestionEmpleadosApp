var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresaSchema=Schema({
        nit:Number,
        nombre:String
    });

const Empresa= mongoose.model('Empresa',EmpresaSchema);
module.exports= Empresa;