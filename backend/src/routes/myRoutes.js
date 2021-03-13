const aws_keys = require('../keys');
//instanciamos el sdk
var AWS = require('aws-sdk');
//instanciamos los servicios a utilizar con sus respectivos accesos.
const s3 = new AWS.S3(aws_keys.s3);
const { Router } = require('express');
const { Mongoose } = require('mongoose');
const router = Router();
const Usuario = require('../models/usuario');
const Publicacion = require('../models/publicacion');
var uuid = require('uuid');


router.get('/', (req, res) => {
    res.json({'Resultado': 'API AYD1: Grupo 5! :D'});
});



router.post('/login', async (req, res) => {

    try {

        const data = req.body;
        await Usuario.findOne({ username: data.username, password: data.password }, function (err, docs) { 
            if (err){ 
                console.log(err)
                res.status(404);
                res.send({ message : error });
            } else if (docs == null) {
                res.status(404);
                res.send({ message : "crendenciales incorrectas o usuario no existe" }); 
            } else{ 
                res.status(202);
                console.log("crendenciales correctas :3")
                res.json(docs);              
            } 
        });
        
    } catch (error) {
        console.log(error)
        res.status(404);
        res.send({ message : error });
        console.log("crendenciales incorrectas o usuario no existe :c");
    }

});


router.post("/new", async (req, res) => {

    try {

        const data = req.body;
        await Usuario.findOne({ username: data.username}, async function (err, docs) { 
            if (err){ 
                console.log(err)
                res.status(404);
                res.send({ message : err });
            } else if (docs == null) {

                var result = "";

                if (data.image.toString() != ""){

                    var nombrei = "fotos/" + uuid() + ".jpg";
                
                //se convierte la base64 a bytes
                let buff = new Buffer.from(data.image, 'base64');
              
                const params = {
                  Bucket: "practica2-ayd1",
                  Key: nombrei,
                  Body: buff,
                  ContentType: "image",
                  ACL: 'public-read'
                };
                s3.putObject(params).promise();

                result = `https://practica2-ayd1.s3.us-east-2.amazonaws.com/` + nombrei;

                }

                await Usuario.create({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    username: data.username,
                    password: data.password,
                    image: result.toString()
                }); 
                res.status(202);
                res.json({ message : 'Usuario registrado :)'});
            } else{ 
                res.status(404);
                res.json({ message : 'Usuario ya existente :('});             
            } 
        });
        
    } catch (error) {
        console.log(error)
        res.status(404);
        res.send({ message : error });
    }
    
});

router.post("/nuevaPublicacion", async (req, res) => {

    try {
        const data = req.body;

        var result = "";

        if (data.image.toString() != ""){

            var nombrei = "fotos/" + uuid() + ".jpg";
        
            //se convierte la base64 a bytes
            let buff = new Buffer.from(data.image, 'base64');
            
            const params = {
                Bucket: "practica2-ayd1",
                Key: nombrei,
                Body: buff,
                ContentType: "image",
                ACL: 'public-read'
            };
            s3.putObject(params).promise();

            result = `https://practica2-ayd1.s3.us-east-2.amazonaws.com/` + nombrei;

        }

        const date = new Date();

        await Publicacion.create({
            nombre: data.nombre,
            apellido: data.apellido,
            username: data.username,
            contenido: data.contenido,
            fecha: date.toString(),
            image: result.toString(),
        }); 
        res.status(202);
        res.json({ message : 'Publicacion registrada :)'});

    } catch (error) {
        console.log(error)
        res.status(404);
        res.send({ message : error });
    }
    
});



module.exports = router; 