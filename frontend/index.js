let nombre = sessionStorage.getItem("user_name")

let titulo = document.getElementById("titulo");

document.addEventListener("DOMContentLoaded", () => {

    if(nombre){
        titulo.innerHTML = "Bienvenido " + nombre;
    }
    else{
        titulo.innerHTML = "Bienvenido";
    }

})