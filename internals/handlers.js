//Manejadores de rutas virtuales
var fechaDeNac = new Date();

var fechaDeNac = new Date(1982,11,23,2,00);
module.exports = {
    "/edad/Abel-Gomora": function (req, res) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        //Calculo la Edad Actual
        var hoy= new Date();
        var age = Math.ceil((hoy - fechaDeNac)/(1000*3600*24*365));
        //armamos respuesta JSON
        var objetoRespuesta = {
            "edad": age
        };
        var RespuestaJSON = JSON.stringify(objetoRespuesta);
        // Envio respuesta al cliente
        res.end(RespuestaJSON);
    }

};