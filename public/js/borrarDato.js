'use strict';

function borrarDato(name) {
    datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")); // guardo el JSON de la variable localStorage 'acceso' en el array 'datosAcceso'
    for (let i = 0; i <= datosAcceso.length - 1; i++) {
        if (datosAcceso[i].nombre === name) { // recorro el 'array' hasta encontrar el dato que busco
            datosAcceso.splice(i, 1); // borro el dato que estoy buscando (elimino 1 valor desde esa posición)
        }
    }

    // guardo los datos del 'array' convirtiendolos en JSON en una variable localStorage llamada 'acceso'
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso)); 

    mostrarDatos(); // vuelvo a mostrar los datos
}