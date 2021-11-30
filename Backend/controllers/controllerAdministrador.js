var mongoose = require("../src/conexDB/conn");
var Administrador = require("../models/administradores");
const Administradores = require("../models/administradores");

function prueba(req,res){

        res.status(200).send({ message: 'probando una acción'});
    }

function saveAdministrador(req,res){
    var miAdministrador = new Administrador(req, body);
    miAdministrador.save((err, result)=>{
        res.status(200).send({message:result});
    });
}

function buscarAdministrador(req,res){
    var idAdministrador=req.params.id;
    Administrador.findById(idAdministrador).exec((err,result)=>{
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

function listarAdministradores(req,res){
    var idAdministrador=req.params.id;
    if(!idAdministrador){
        var result=Administrador.find({}).sort('nombre');
    }else{
        var result=idAdministrador.find({_id:idAdministrador});
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

function updateAdministrador(req,res){
    var id = mongoose.Types.ObjectId(req.query.id);
    Administradores.findOneAndUpdate(id, req.body, function(err, Administradores) {
        if (err){
            res.send(err);
            res.status(500).send({message:'Error ID no encontrada'});
        }  
        else{
            res.json(Administradores);
        }
    });
}
    

function deleteAdministrador(req,res){
    var idAdministrador=req.params.id;
    Administrador = Administradores.findByIdAndRemove(idAdministrador, function(err, Administrador){
        if(err) {
            res.status(500).send({
                                    message: 'Error desconocido al ejecutar'
                                }
                            )
        }else
        {
            if(!administrador){
                res.status(404).send({message:'El registro a buscar no se encuentra en la BD'});
            }else{
                res.status(200).send({carrera});
                }
            }
    });
}

module.exports={
    prueba,
    saveAdministrador,
    buscarAdministrador,
    listarAdministradores,
    updateAdministrador,
    deleteAdministrador
}