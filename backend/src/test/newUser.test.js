'use stricts'
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'https://shrouded-coast-79182.herokuapp.com';

describe('test register endpoint: ',()=>{
    it('should register new user', (done) => {
    chai.request(url)
    .post('/new')
    .send({
        nombre: "Test",
        apellido: "User",
        username: "000000003cl",
        password: "123456789",
        image: ""
    })
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(202)  
    done();
    });
    });
   });