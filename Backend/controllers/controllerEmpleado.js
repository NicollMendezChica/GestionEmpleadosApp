var mongoose = require("../src/conexDB/conn");
var Empleado = require("../models/empleados");
const Empleados = require("../models/empleados");

function pruebaE(req,res){

    res.status(200).send({ message: 'probando una acción'});
}

function saveEmpleado(req,res){
    var miEmpleado = new Empleado(req, body);
    miEmpleado.save((err, result)=>{
        res.status(200).send({message:result});
    });
}

function buscarEmpleado(req,res){
    var idEmpleado=req.params.id;
    Empleado.findById(idEmpleado).exec((err,result)=>{
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

function listarEmpleados(req,res){
    var idEmpleado=req.params.id;
    if(!idEmpleado){
        var result=Empleado.find({}).sort('nombre');
    }else{
        var result=idEmpleado.find({_id:idEmpleado});
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

function updateEmpleado(req,res){
    var id = mongoose.Types.ObjectId(req.query.id);
    Empleados.findOneAndUpdate(id, req.body, function(err, Empleado) {
        if (err){
            res.send(err);
            res.status(500).send({message:'Error ID no encontrada'});
        }  
        else{
            res.json(Empleados);
        }
    });
}
    

function deleteEmpleado(req,res){
    var idEmpleado=req.params.id;
    Empleado = Empleados.findByIdAndRemove(idEmpleado, function(err, Empleado){
        if(err) {
            res.status(500).send({
                                    message: 'Error desconocido al ejecutar'
                                }
                            )
        }else
        {
            if(!Empleado){
                res.status(404).send({message:'El registro a buscar no se encuentra en la BD'});
            }else{
                res.status(200).send({carrera});
                }
            }
    });
}


module.exports={
    pruebaE,
    saveEmpleado,
    buscarEmpleado,
    listarEmpleados,
    updateEmpleado,
    deleteEmpleado
}