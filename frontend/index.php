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

<body class=" m-0 p-0" style="overflow: hidden;">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard m-0 p-0 d-flex w-100">
        <aside id="dashboard" class="menuVert"></aside>
        <section class="flex-grow-1 m-0 p-0" style="min-width: 0;">
            <section class="w-100 m-0 p-0">
                <section class="d-flex gap-3" id="AdminPanel">
                    <section class="card" style="width: 18rem;">
                        <section class="card-body">
                            <header class="d-flex justify-content-between">
                                <h3>Usuarios</h3>
                                <h4 id="usuarioCount"></h4>
                            </header>
                            <hr>
                            <section class="row">
                                <a class='link-offset-2 link-underline link-underline-opacity-0' href='/sesion/registrarse.php'>Registrar Usuario</a>
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
                                <a class="link-offset-2 link-underline link-underline-opacity-0" href='/sesion/CrearEmpleado.php'>Registrar Empleado</a>
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
                <section class="d-flex gap-3" id="CocineroPanel">
                    <section class="card" style="width: 18rem;">
                        <section class="card-body">
                            <header clasS="d-flex justify-content-between">
                                <h3>Platos</h3>
                                <h4 id="cocineroPlatoCount"></h4>
                            </header>
                            <hr>
                            <section class="row">
                                <a class='link-offset-2 link-underline link-underline-opacity-0' href='./platos/administrarPlatos.php'>Administrar Platos</a>
                            </section>
                        </section>
                    </section>
                    <section class="card" style="width: 18rem;">
                        <section class="card-body">
                            <header clasS="d-flex justify-content-between">
                                <h3>Pedidos</h3>
                                <h4 id="CocineroPedidoCount"></h4>
                            </header>
                            <hr>
                            <section class="row">
                                <a class='link-offset-2 link-underline link-underline-opacity-0' href='/pedidos/VerPedidos.php'>Administrar Pedidos</a>
                            </section>
                        </section>
                    </section>
                </section>
                <section class="d-flex gap-3" id="RepartidorPanel">
                    <section class="card" style="width: 18rem;">
                        <section class="card-body">
                            <header clasS="d-flex justify-content-between">
                                <h3>Pedidos</h3>
                                <h4 id="RepartidorPedidoCount"></h4>
                            </header>
                            <hr>
                            <section class="row">
                                <a class='link-offset-2 link-underline link-underline-opacity-0' href='/pedidos/VerPedidos.php'>Administrar Pedidos</a>
                            </section>
                        </section>
                    </section>
                </section>
                <section class="w-100 m-0 p-0" id="UsuarioPanel">
                    <section class="position-relative w-100" style="height: calc(100vh - 56px); overflow: hidden;">
                        <section id="carouselHero" class="carousel slide h-100 w-100" data-bs-ride="carousel" data-bs-interval="4000">
                            <section class="carousel-inner h-100 w-100">
                                <section class="carousel-item active h-100 w-100">
                                    <img src="./imagenes/chuleton.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Chuleton">
                                </section>
                                <section class="carousel-item h-100 w-100">
                                    <img src="./imagenes/croquetas.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Croquetas">
                                </section>
                                <section class="carousel-item h-100 w-100">
                                    <img src="./imagenes/espagueticarbonara.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Espaguetis a la carbonara">
                                </section>
                                <section class="carousel-item h-100 w-100">
                                    <img src="./imagenes/alitaspicantes.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Alitas picantes">
                                </section>
                                <section class="carousel-item h-100 w-100">
                                    <img src="./imagenes/gambasalajillo.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Gambas al ajillo">
                                </section>
                            </section>
                        </section>
                        <section class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></section>
                        <section class="shadow-lg position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-4 text-center" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.8);">
                            <h1 id="titulo" class="text-warning fw-bold display-3"></h1>
                            <a href="./escaparate/escaparate.php" class="btn btn-warning btn-lg px-5 text-uppercase letter-spacing-2">
                                Ver la carta
                            </a>
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