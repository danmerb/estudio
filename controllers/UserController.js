const User = require('../models/User'); 
const userController =  {}; 

userController.index = async function (req, res, next) {
    let users = await User.find(); 
    return res.status(200).json(users); 
}

userController.findUser = async function (req, res, next) {
    let {id} = req.params; 
    let user = await User.findById(id).catch(err =>  {
        return next(res)
    })
    return res.status(200).json(user); 
}

userController.store = async function (req, res, next) {
    let user = new User( {}); 
    user.nombre = req.body.nombre; 
    user.fecha = req.body.fecha; 
    user.correo = req.body.correo; 
    try {
        await user.save(); 
        return res.status(200).json( {"message":"Usuario agregado con exito", user:user}); 
    }catch (err) {
        return res.status(500).json( {err:err, message:"Por favor revise sus datos"}); 
    }
}

userController.update= async function (req, res, next) {
    let { id } = req.params;
    let user = {
        nombre: req.body.nombre,
        fecha: req.body.fecha, 
        correo: req.body.correo
    }
    console.log(user);
    try {
        await User.update({ _id: id }, user);
        res.status(200).json({ "message": "Usuario actualizado con exito" }); 
    }catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }
}

userController.delete=async function(req, res, next){
    let { id } = req.params;
    await User.remove({ _id: id });
    res.status(200).json({ "message": "Usuario Eliminado con exito" });
}

module.exports=userController;