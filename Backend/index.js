var app = require('./app');
var mogoose = require('./src/conexDB/conn')
var port = 4000;

require('dotenv').config({path:'variables.env'});
console.log(process.env.DB_URL);

app.listen(port, () =>{
    console.log("servidor corriendo ok")
});

const host= process.env.HOST || '0.0.0.0';
const port=process.env.PORT || 3000;

app.listen(port, host, () =>{
    console.log('El servidor está funcionado')
});