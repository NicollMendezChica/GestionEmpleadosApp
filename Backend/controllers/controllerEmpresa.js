var mongoose = require("../src/conexDB/conn");
var Empresa = require("../models/Empresas");
const Empresas = require("../models/Empresas");

function pruebaEm(req,res){

        res.status(200).send({ message: 'probando una acción'});
    }

function saveEmpresa(req,res){
    var miEmpresa = new Empresa(req, body);
    miEmpresa.save((err, result)=>{
        res.status(200).send({message:result});
    });
}

function buscarEmpresa(req,res){
    var idEmpresa=req.params.id;
    Empresa.findById(idEmpresa).exec((err,result)=>{
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

function listarEmpresa(req,res){
    var idEmpresa=req.params.id;
    if(!idEmpresa){
        var result=Empresa.find({}).sort('nombre');
    }else{
        var result=idEmpresa.find({_id:idEmpresa});
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

function updateEmpresa(req,res){
    var id = mongoose.Types.ObjectId(req.query.id);
    Empresas.findOneAndUpdate(id, req.body, function(err, Empresas) {
        if (err){
            res.send(err);
            res.status(500).send({message:'Error ID no encontrada'});
        }
        else{
            res.json(Empresas);
        }
    });
}


function deleteEmpresa(req,res){
    var idEmpresa=req.params.id;
    Empresa = Empresas.findByIdAndRemove(idEmpresa, function(err, Empresa){
        if(err) {
            res.status(500).send({
                                    message: 'Error desconocido al ejecutar'
                                }
                            )
        }else
        {
            if(!Empresa){
                res.status(404).send({message:'El registro a buscar no se encuentra en la BD'});
            }else{
                res.status(200).send({carrera});
                }
            }
    });
}

module.exports={
    pruebaEm,
    saveEmpresa,
    buscarEmpresa,
    listarEmpresa,
    updateEmpresa,
    deleteEmpresa
}