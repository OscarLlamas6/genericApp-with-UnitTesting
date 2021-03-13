const { Router } = require('express');
const { Mongoose } = require('mongoose');
const router = Router();
const Usuario = require('../models/usuario');


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
                
                await Usuario.create({
                    nombre: data.nombre,
                    apellido: data.apellido,
                    username: data.username,
                    password: data.password,
                    image: data.image
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



module.exports = router; 