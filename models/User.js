const mongoose = require('mongoose');
const{Schema} = mongoose;

const userSchema = new Schema(
    {
        nombre:{type: String, required: true},
        fecha:{type: Date, required: true},
        correo:{type: String,required:true},
        
    }
);
module.exports=mongoose.model('users',userSchema);