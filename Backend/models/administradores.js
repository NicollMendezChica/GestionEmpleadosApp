var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var AdministradorSchema = Schema({
    usuario: String,
    contraseña: String
});

const Administradores = mongoose.model('Administrador',AdministradorSchema);
module.exports=Administradores;