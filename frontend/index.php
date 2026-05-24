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

<body class=" m-0 p-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard m-0 p-0 d-flex w-100">
        <aside id="dashboard" class="menuVert"></aside>
        <section class="flex-grow-1 w-100 m-0 p-0">

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
                    <section class="position-relative w-100" style="height: 80vh; overflow: hidden;">
                        <section id="carouselHero" class="carousel slide h-100 w-100" data-bs-ride="carousel" data-bs-interval="4000">
                            <section class="carousel-inner h-100 w-100">
                                <section class="carousel-item active h-100 w-100">
                                    <img src="./img/carrusel1.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Slide 1">
                                </section>
                                <section class="carousel-item h-100 w-100">
                                    <img src="./img/carrusel2.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Slide 2">
                                </section>
                                <section class="carousel-item h-100 w-100">
                                    <img src="./img/carrusel3.jpg" class="d-block w-100 h-100 object-fit-cover" alt="Slide 3">
                                </section>
                            </section>
                        </section>
                        <section class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></section>
                        <section class="shadow-lg position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-4 text-center">
                            <h1 id="titulo" class="text-warning fw-bold display-3"></h1>
                            <a href="./carta/carta.php" class="btn btn-warning btn-lg px-5 text-uppercase letter-spacing-2">
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