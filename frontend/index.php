<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood</title>
    <?php
    include("./bootstrap.php");
    ?>
    <link rel="stylesheet" href="./style/style.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <section>
            <h1 id="titulo"></h1>
            <section>
                <section class="">

                    <section class="d-flex gap-3" id="AdminPanel">
                        <section class="card" style="width: 18rem;">
                            <section class="card-body">
                                <header class="d-flex justify-content-between">
                                    <h3>Usuarios</h3>
                                    <h4 id="usuarioCount"></h4>
                                </header>
                                <hr>
                                <section class="row">
                                    <a class='link-offset-2 link-underline link-underline-opacity-0' href='/sesion/registrarse.php'>Crear Usuario</a>
                                    <a class='link-offset-2 link-underline link-underline-opacity-0' href='/sesion/AdministrarUsuarios.php'>Administrar Usuarios</a>
                                </section>
                            </section>
                        </section>

                        <section class="card" style="width:18rem;">
                            <section class="card-body">
                                <header class="d-flex justify-content-between">
                                    <h3>Empleados</h3>
                                    <h4 id="empleadoCount"></h4>
                                </header>
                                <hr>
                                <section class="row">
                                    <a class="link-offset-2 link-underline link-underline-opacity-0" href='/sesion/CrearEmpleado.php'>Crear Empleado</a>
                                    <a class='link-offset-2 link-underline link-underline-opacity-0' href='/sesion/AdministrarEmpleados.php'>Administrar Empleados</a>
                                </section>
                            </section>
                        </section>

                        <section class="card" style="width: 18rem;">
                            <section class="card-body">
                                <header clasS="d-flex justify-content-between">
                                    <h3>Pedidos</h3>
                                    <h4 id="pedidoCount"></h4>
                                </header>
                                <hr>
                                <section class="row">
                                    <a class='link-offset-2 link-underline link-underline-opacity-0' href='/pedidos/VerPedidos.php'>Administrar Pedidos</a>
                                </section>
                            </section>
                        </section>

                        <section class="card" style="width: 18rem;">
                            <section class="card-body">
                                <header clasS="d-flex justify-content-between">
                                    <h3>Platos</h3>
                                    <h4 id="platoCount"></h4>
                                </header>
                                <hr>
                                <section class="row">
                                    <a class='link-offset-2 link-underline link-underline-opacity-0' href='./platos/administrarPlatos.php'>Administrar Platos</a>
                                </section>
                            </section>
                        </section>
                    </section>


                </section>
            </section>
        </section>
    </section>
</body>
<script type="module" src="./navBar.js"></script>
<script type="module" src="./index.js"></script>
<script type="module" src="./dashboard.js"></script>

</html>