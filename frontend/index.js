let nombre = sessionStorage.getItem("user_name")

let titulo = document.getElementById("titulo");

let rol = sessionStorage.getItem("user_rol");

let usuarioCount = document.getElementById("usuarioCount");

let empleadoCount = document.getElementById("empleadoCount");

document.addEventListener("DOMContentLoaded", () => {

    init();

})

async function contarUsuarios(){

    debugger;

    try {

        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const respuesta = await fetch('http://127.0.0.1:8000/api/contarUsuarios', options);

        const resultado = await respuesta.json();

        return resultado.count;

    }
    catch (err) {
        console.error(err);
    }

}

async function init(){

    console.log(rol);

    if (rol == "admin") {
        
        let usuariosTotales = await contarUsuarios();

        console.log(usuariosTotales);

        usuarioCount.textContent = usuariosTotales.usuarios;

        empleadoCount.textContent = usuariosTotales.empleados;
    }
    else {
        if (nombre) {
            titulo.innerHTML = "Bienvenido " + nombre;
        }
        else {
            titulo.innerHTML = "Bienvenido";
        }
    }
}