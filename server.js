// http 
var http = require("http");
var fs = require('fs'); // libreria para leer archivo
//Obteniendo informacion del entorno de ejecucion con respecto al puerto que debemos usar 
//en nuestro server
var colors=require('colors');
var handlers = require('./internals/handlers'); //objeto el nombre del objeto es una ruta
var config = require("./config/config.js");
var staticServer = require('./internals/static-server');

var PORT = config.PORT;
var IP = config.IP;
if (IP == '127.0.0.1') {
    console.log(">---Ejecutando en modo local----<");
};

// Crear un servidor basico
var server = http.createServer(function (req, res) { //dentro de los parentesis se especifica que se quiere hacer call back function nos pasara dos paramatros
    //el primer parametro model la peticion, el segundo modela la respuesta se abrevian request y response.
    //Armar la respuesta http
    //Codigo de respuesta y el tipo de contenido que vamos a regresar
    //Armar encabezado http
// ---Ya no se usa por que se hardcodea el archivo y se hace mas dinamico----
/*    res.writeHead(200, {
        "Content-Type": "text/html",// se cambio por "text/plain" - indicando que se utilizara HTML y respeta las etiquietas  MIMETYPE
        "Server": "ITGAM@4.4.5" // no se recomienda poner el original puesto que estaria expuesto a hackers
    });
    // Enviamos la respuesta
    fs.readFile('./static/index.html', 'utf8', function (err, content) {
        if (err) {
            res.end("<h1>ERRO DE LECTURA</h1>");
        } else {
            res.end(content);
        }
    });
    //Enviamos la respuesta
    //res.write("<h1>Hola, bienvenido a mi server <<<---->vox<--->>></h1>"); //al escribir write se envia informacion que desea recibir
    //Cerrar la conexion
    //res.end();*/
//Obtener la URL del archivo
    var url = req.url;//obtenemos del metodo req la url
   //Sirvo la url con mi servidor estatico
   if(url =="/"){
       //sirve el index
       url="/index.html";
   }
   // Verificando que la peticion del cliente sea una ruta virtual
if(typeof(handlers[url]) === 'function'){
    // Si entro aqui, significa que existe un manejador para la URl que se esta solicitando por lo tanto la ejecuto.
    handlers[url](req, res)
    }else {
    console.log(`>URL Solicitada ${url}...`.yellow);
    staticServer.serve(url, res);
    }

   
});


// Poner a trabajar al server 
// va a resivir 3 parametros 1. el puerto 2. La direccion IP. 3. call back function sin parametros
server.listen(PORT, IP, function () {
    console.log(`> Server listering @http://${IP}:${PORT}`);
}); //server que contestas