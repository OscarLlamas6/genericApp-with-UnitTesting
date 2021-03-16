const app = require('./src/app');
const { PORT } = require('./src/config');
const { connect } = require('./src/database');
const mensaje = require('./src/mensajeServidor');

app.set('port', PORT);
let msg = mensaje.mensajeServidor();

async function main(){

   //Database connection
   await connect();
   //Express application
   await app.listen(app.get('port'));
   console.log(`Server on port ${app.get('port')}:`+ msg)
};

main();