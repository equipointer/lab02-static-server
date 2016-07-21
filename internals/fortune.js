var fortunePaper = {
            "mensaje":
            "La honestidad es un regalo caro, no lo esperes de gente baratisima"
};

module.exports = {
    //metodo llamado 
    "getFortune" : function(cb){
        //Convirtiendo el fortunePaper de objeto
        // a su version en string
        fortunePaper = JSON.stringify(fortunePaper);
        //Ejecutando el Call Back (cb) pasandole
        //como parametro el fortunePaper string
        cb(fortunePaper);

    }
};  //exportar un Objeto