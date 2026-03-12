<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administrar Platos</title>
    <?php include("../bootstrap.php"); ?>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>

    <div class="container mt-5">
        <h2>Administrar Platos</h2>
        <button class="btn btn-primary mb-3" id="btnNuevoPlato">+ Añadir Nuevo Plato</button>

        <table class="table table-striped" id="tablaPlatos">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Disponible</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                </tbody>
        </table>
    </div>

    <script type="module" src="../navBar.js"></script>
    <script src="./administrarPlatos.js"></script>
</body>
</html>