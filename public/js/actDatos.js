




function putData(name) {
    let nombre = document.getElementById("nombre");
    let valor = document.getElementById("valor");

    let prev_name = name.split(",")[0];
    let prev_value = name.split(",")[1];

    nombre.value = prev_name;
    valor.value = prev_value;
    
    document.getElementById("guardar").addEventListener("click",()=> {
        setCookie(prev_name,valor.value,30);
    });

    console.log(nombre);
    console.log(valor);
    console.log(name);
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}