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
    },
    //estamos llamando otra function
    "/getfortune": function (req, res){
        //Contestar con un json, y se obtiene mensaje de la forma
        var fortunePaper = {
            "mensaje":
            "La honestidad es un regalo caro, no lo esperes de gente baratisima"
        };
        //configura el contenido de respuesta HTTP
        res.writeHead(200, {
            "Content-Type" : "application/JSON"
        });
        //Parsenado a string el objetoRespuesta de respuesta
        var jsonResponse=JSON.stringify(fortunePaper);
        //responde el Objeto
        res.end(jsonResponse);
    }

};