// http 
var http = require("http");
// Crear un servidor basico
var server = http.createServer(function (req, res) { //dentro de los parentesis se especifica que se quiere hacer call back function nos pasara dos paramatros
//el primer parametro model la peticion, el segundo modela la respuesta se abrevian request y response.
//Armar la respuesta http
//Codigo de respuesta y el tipo de contenido que vamos a regresar
//Armar encabezado http
    res.writeHead(200,{
        "Content-Type" : "text/plain",
        "Server" : "ITGAM@4.4.5" // no se recomienda poner el original puesto que estaria expuesto a hackers
     });
     //Enviamos la respuesta
     res.write("Hola Mundo"); //al escribir write se envia informacion que desea resivir
     //Cerrar la conexion
     res.end();
}); 
// Poner a trabajar al server 
server.listen(3000, '127.0.0.1', function(){//va a resivir 3 parametros 1. el puerto 2. La direccion IP. 3. call back function sin parametros
console.log("> Server listering @http://localhost:3000");
}); //server que contesta