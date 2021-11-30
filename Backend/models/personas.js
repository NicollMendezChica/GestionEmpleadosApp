var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema=Schema({
        id:Number,
        nombre:String,
        telefono:Number,
        correo:String
    });

const Persona= mongoose.model('Persona',PersonaSchema);
module.exports= Persona;