const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombre: { type : String , required : true},
    apellido: { type : String , required : true},
    username: { type : String , unique : true, required : true},
    password: { type : String , required : true},
    image: { type: String }
});

module.exports = model('Usuario', usuarioSchema);