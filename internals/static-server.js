//Cargar los modulos necesarios
//Para crear mi servidor estatico

var fs = require('fs'),
    config = require('../config/config.js');//lectura de paquetes desde punto de vista del programa
    mime = require('mime');

//Exportar la funcion de Servidor estatico
exports.serve = function (url, res) {
  
    //Acompletar el static-path
    var filePath = config.STATIC_PATH + url; //la ruta estatica mas la url que el usuario tecleara
    //Verificar si el archivo existe dentro del servidor
    fs.exists(filePath, function (exists) {
        if (exists) {
            //Sirvo el archivo
            fs.readFile(filePath, function (err, content) {
                if (err) {
                    console.log(`Hubo un erro en la lectura del archivo ${filePath}`);
                    //Enviar error 500
                    res.writeHead(500, {
                        'Content-Type': 'text/html',
                        'Server': 'ITGAM@4'
                    });
                    res.end("<h1>Error 500 Recurso Dañado</h1>");
                } else {
                    //Configuramos la respusta
                    var contentType = mime.lookup(filePath);
                    //Armamos respuesta
                    res.writeHead(200, {
                        'Content-Type': 'contentType',
                        'Server': 'ITGAM@4'

                    });
                    //Enviar el archivo
                    res.end(content);
                }

            });

        } else {
            //Mando un codigo 404
            res.writeHead(404, {
                'Content-Type': 'text/html',
                'Server': 'ITGAM@4'

            });
            res.end("<h1>404: Recurso no encontrado</h1>");

        }
    });
};