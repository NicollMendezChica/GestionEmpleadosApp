var app = require('./app');
var mogoose = require('./src/conexDB/conn')
var port = 4000;

app.listen(port, () =>{
    console.log("servidor corriendo ok")
});
