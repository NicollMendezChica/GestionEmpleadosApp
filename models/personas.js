var mongoose = require('mongoose');
var Schema = mongoose.schema;

var PersonaSchema=Schema({
        id:int,
        nombre:String,
        telefono:int,
        correo:String
    });

const Persona= mongoose.model('Persona',PersonaSchema);
module.exports= Persona;