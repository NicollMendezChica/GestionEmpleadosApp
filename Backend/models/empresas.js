var mongoose = require('mongoose');
var Schema = mongoose.schema;

var EmpresaSchema=Schema({
        nit:int,
        nombre:String
    });

const Empresa= mongoose.model('Empresa',EmpresaSchema);
module.exports= Empresa;