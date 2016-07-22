function getFortuneFromServer() {
    //Realizando la solicitud get de AJAX
    $.get("/getfortune", function (data, status) {
        console.log(">" + typeof (data));
        console.log(">Estatus de respuesta:" + status);
        //alert(data.mensaje);
        swal({
            title: "¡Tu Fortuna!",
            text: data.mensjae,
            imageUrl:  "img/Good.png"
        })
    });
    // esto aparecera en la consola del cliente no en la del servidor

    //alert("¡Esta es tu fortuna!");
}