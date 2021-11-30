var mongoose = require("../src/conexDB/conn");
var Persona = require("../models/Persona");
const Personas = require("../models/Personas");

function pruebaP(req,res){

        res.status(200).send({ message: 'probando una acción'});
    }

function savePersona(req,res){
    var miPersona = new Persona(req, body);
    miPersona.save((err, result)=>{
        res.status(200).send({message:result});
    });
}

function buscarPersona(req,res){
    var idPersona=req.params.id;
    Persona.findById(idPersona).exec((err,result)=>{
    if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
    }else{
        if(!result){
            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
            res.status(200).send({result});
            }
        }
    });
    }

function listarPersona(req,res){
    var idPersona=req.params.id;
    if(!idPersona){
        var result=Persona.find({}).sort('nombre');
    }else{
        var result=idPersona.find({_id:idPersona});
    }
    result.exec(function(err,result){
    if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
    }else{
        if(!result){
            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
        res.status(200).send({result});
            }
        }
    })
}

function updatePersona(req,res){
    var id = mongoose.Types.ObjectId(req.query.id);
    personas.findOneAndUpdate(id, req.body, function(err, personas) {
        if (err){
            res.send(err);
            res.status(500).send({message:'Error ID no encontrada'});
        }  
        else{
            res.json(personas);
        }
    });
}
    

function deletePersona(req,res){
    var idPersona=req.params.id;
    Persona = personas.findByIdAndRemove(idPersona, function(err, Persona){
        if(err) {
            res.status(500).send({
                                    message: 'Error desconocido al ejecutar'
                                }
                            )
        }else
        {
            if(!Persona){
                res.status(404).send({message:'El registro a buscar no se encuentra en la BD'});
            }else{
                res.status(200).send({carrera});
                }
            }
    });
}

module.exports={
    pruebaP,
    savePersona,
    buscarPersona,
    listarPersona,
    updatePersona,
    deletePersona
}