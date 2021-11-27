var mongoose = require('mongoose');
var Schema = mongoose.schema;

var AdministradorSchema=Schema({
        usuario:String,
        contraseña:String
    });

const Administrador= mongoose.model('Administrador',AdministradorSchema);
module.exports= Administrador;