<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <?php

                $rol = "user";

                switch ($rol) {

                    case "user":
                        echo "
                            <li class='nav-item'>
                                <a class='nav-link active' aria-current='page' href='#'>Inicio</a>
                            </li>
                            <li class='nav-item dropdown'>
                                <a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    Carta
                                </a>
                                <ul class='dropdown-menu'>
                                    <li><a class='dropdown-item' href='#'>Marisco</a></li>
                                    <li><a class='dropdown-item' href='#'></a></li>
                                    <li><a class='dropdown-item' href='#'>Pasta</a></li>
                                </ul>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Mis Pedidos</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Mis Datos</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link disabled' aria-disabled='true'>Disabled</a>
                            </li>
                            ";
                        break;
                    case "admin":
                        echo "
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Administrar Empleados</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Administrar Platos</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Administrar Ingredientes</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Administrar Horario De los Empleados</a>
                            </li>
                            ";
                        break;
                    case "repartidor":
                        echo "
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Pedidos</a>
                            </li>
                            ";
                        break;
                    case "cocinero":
                        echo "
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Administrar Platos</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Administrar Ingredientes</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>Pedidos</a>
                            </li>
                            ";
                        break;
                    default:
                        echo "
                            <li class='nav-item dropdown'>
                                    <a class='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        Carta
                                    </a>
                                    <ul class='dropdown-menu'>
                                        <li><a class='dropdown-item' href='#'>Marisco</a></li>
                                        <li><a class='dropdown-item' href='#'></a></li>
                                        <li><a class='dropdown-item' href='#'>Pasta</a></li>
                                    </ul>
                                </li>
                            ";
                        break;
                }

                ?>

            </ul>
        </div>
    </div>
</nav>