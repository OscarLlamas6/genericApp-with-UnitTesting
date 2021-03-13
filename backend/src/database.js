const mongoose = require('mongoose');
const config = require("./config");

const MONGODB_URL = `mongodb+srv://${config.MONGODB_USER}:${config.MONGODB_PASSWORD}@cluster0.vd0tn.mongodb.net/${config.MONGODB_DATABASE}?retryWrites=true&w=majority`;

async function connect(){
  await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Database connected :D');
};

module.exports = { connect };