
window.onload = function() {

    let toggle_amount = window.document.getElementsByClassName("del_icon");

   for(let i= 0;i<toggle_amount.length;i++) {
    toggle_amount[i].addEventListener("click",()=> {
        borrarDatos(toggle_amount[i].id);
        
    });
   }

   //actualizar
   let toggle_amount2 = window.document.getElementsByClassName("upd_icon");

   for(let i= 0;i<toggle_amount2.length;i++) {
    toggle_amount2[i].addEventListener("click",()=> {
        putData(toggle_amount2[i].id);

    });
   }
}



function borrarDatos(nombre) {
    let caducidadCookie = 1 * 60 * 1000; // caducidad por defecto, 1 minutos

    let theDate = new Date(); // obtengo la fecha actual
    let currentMiliseconds = theDate.getTime(); // obtengo la fecha actual en milisegundos
    let expirationMiliseconds = currentMiliseconds - caducidadCookie; // subtraigo la caducidad en milisegundos
    theDate.setTime(expirationMiliseconds); // actualizo la fecha (ahora con el decremento de la caducidad)
    console.log(`Fecha caducidad: ${theDate}`);

    // borro la 'cookie'
    document.cookie = nombre + "=;expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure"; 

    console.log(document.cookie);
    window.location.reload();
}