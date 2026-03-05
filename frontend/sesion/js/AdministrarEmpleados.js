let lista = document.getElementById("lista");

async function ContadorUsuarios() {

    try {

        const options = {
            method: "GET"
        }

        const respuesta = await fetch('http://127.0.0.1:8000/api/contarUsuarios', options);

        const resultado = await respuesta;

        return resultado;

    }
    catch (err) {
        console.error(err);
    }

}

async function recogerDatos(config) {

    try {

        const options = {
            method: "POST",
            Headers: {
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(config)
        };

        const respuesta = await fetch('http://127.0.0.1:8000/api/mostrarUsuarios', options)

        const resultado = await respuesta.json();

    }
    catch (err) {
        console.error(err);
    }
}

async function paginacion(){

    let usuariosTotal = await ContadorUsuarios();

    console.log(usuariosTotal);

}

paginacion();

console.log("cargado");

let btnFiltros = document.getElementById("btnFiltros");

btnFiltros.addEventListener('click', () => {

    

})