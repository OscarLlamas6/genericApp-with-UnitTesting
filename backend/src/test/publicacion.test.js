'use stricts'
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'https://shrouded-coast-79182.herokuapp.com';

describe('test nueva publicacion endpoint: ',()=>{
    it('should publicar', (done) => {
        chai.request(url)
        .post('/nuevaPublicacion')
        .send({
            nombre: "Oscar",
            apellido: "Llamas",
            username: "201602625",
            contenido: "Hola Mundo! Prueba unitaria",
            image: ""
        })
        .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(202)  
                done();
            });
        });
});

describe('test segunda publicacion endpoint: ',()=>{
    it('debería realizar una nueva publicación', (done) => {
        chai.request(url)
        .post('/nuevaPublicacion')
        .send({
            nombre: "Oscar",
            apellido: "Llamas",
            username: "201602625",
            contenido: "Otra prueba unitaria",
            image: ""
        })
        .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(202)  
                done();
            });
        });
});

describe('get all post: ',()=>{
    it('should get all post', (done) => {
        chai.request(url)
        .get('/getPublicaciones')
        .end( function(err,res){
            console.log(res.body)
            expect(res).to.have.status(202);
            done();
        });
    });
});