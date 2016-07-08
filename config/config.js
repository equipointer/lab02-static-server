//Leyendo archivo de configuraciones
/*module.exports= {
    IP : process.env.IP || "127.0.0.1",
    PORT : process.env.PORT || 3000
};*/

var fs = require("fs");
var objconfig = JSON.parse(fs.readFileSync("./config/config.json","utf-8"));  //le archivo de forma sincrona
// resource path cuando se trabaja en Back-End usar rutas absolutas.
objconfig.IP = process.env.IP || objconfig.ip;
objconfig.PORT = process.env.PORT || objconfig.PORT;

module.exports = objconfig;