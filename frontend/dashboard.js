let dashboardContent = `
        <a class="btn" href='/sesion/CrearEmpleado.php'>Registrar Empleado</a><br>
        <a class='btn' href='/sesion/AdministrarEmpleados.php'>Administrar Empleados</a> <br>
        <hr>
        <a class='btn' href='/sesion/registrarse.php'>Registrar Usuario</a><br>
        <a class='btn' href='/sesion/AdministrarUsuarios.php'>Administrar Usuarios</a> <br>
        <hr>
        <a class='btn' href='/platos/administrarPlatos.php'>Administrar Platos</a> <br>
        <hr>
        <a class='btn' href='/ingredientes/administrarIngredientes.php'>Administrar Ingredientes</a> <br>
        <hr>
        <a class='btn' href='/pedidos/VerPedidos.php'>Administrar Pedidos</a>
    `;

let dashboard = document.getElementById("dashboard");

let rol = await sessionStorage.getItem("user_rol");

document.addEventListener("DOMContentLoaded", () => {

    if(rol == "admin"){
        dashboard.innerHTML = dashboardContent;
    }
});