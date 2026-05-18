let dashboardContent = `
        <a class='btn' href='/sesion/AdministrarEmpleados.php'>Administrar Empleados</a> <br>
        <a class='btn' href='/sesion/AdministrarUsuarios.php'>Administrar Usuarios</a> <br>
        <a class='btn' href='/platos/administrarPlatos.php'>Administrar Platos</a> <br>
        <a class='btn' href='/ingredientes/administrarIngredientes.php'>Administrar Ingredientes</a> <br>
        <a class='btn' href='#'>Administrar Horario De los Empleados</a> <br>
        <a class='btn' href='/pedidos/VerPedidos.php'>Administrar Pedidos</a>
    `;

let dashboard = document.getElementById("dashboard");

let rol = await sessionStorage.getItem("user_rol");

document.addEventListener("DOMContentLoaded", () => {

    if(rol == "admin"){
        dashboard.innerHTML = dashboardContent;
    }
});