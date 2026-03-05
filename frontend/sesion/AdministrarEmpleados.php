<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrar Empleados</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="./css/AdministrarEmpleados.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <div id="controles">
        <button class="btn btn-primary" id="btnFiltros" data-bs-toggle="collapse" data-bs-target="#collapseFiltro" aria-expanded="false" aria-controls="collapseFiltro">Mostrar Filtros</button>
        <section class="collapse" id="collapseFiltro">
            <div class="card card-body">
                <form>
                    <!-- Filtro de limite
                    
                    Si se selecciona max el envío del offset tendrá que se de 0,
                    pero se debe de incorporar una advertencía por si llegan a ver muchos registros

                    Limites: 10, 20, 30, max

                    -->
                    <select class="form-select" aria-label="Default select example">
                        <option value="10" selected>10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="max">max</option>
                    </select>
                    <button class="btn btn-primary" type="submit">Filtrar</button>
                </form>
            </div>
        </section>
    </div>
    <div id="lista">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@social</td>
                </tr>
            </tbody>
        </table>
    </div>

    <script type="module" src="./js/AdministrarEmpleados.js"></script>
    <script type="module" src="../navBar.js"></script>
</body>

</html>