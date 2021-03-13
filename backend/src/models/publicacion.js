const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    nombre: { type : String , required : true},
    apellido: { type : String , required : true},
    username: { type : String , unique : true, required : true},
    fecha: { type: String, required : true },
    contenido: { type : String },
    image: { type: String }
});

module.exports = model('Publicacion', postSchema);

