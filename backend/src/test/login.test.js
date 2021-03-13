'use stricts'
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'https://shrouded-coast-79182.herokuapp.com';

describe('test login endopoint: ',()=>{
    it('should login', (done) => {
    chai.request(url)
    .post('/login')
    .send({username: "201602625", password: "123456789"})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(202);
    done();
    });
    });
   });