<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Carrito</title>
    <?php
    include("../bootstrap.php");
    ?>
    <link rel="stylesheet" href="../style/style.css">
    <link rel="stylesheet" href="./style/VerMiCarrito.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="dashboard">
        <aside id="dashboard" class="menuVert"></aside>
        <section class="d-flex gap-3">
            <section class="card">
                <section class="card-body">
                    <table class="table table-striped table-hover table-bordered rounded-start-2">
                        <thead class="table-dark">
                            <tr>
                                <th>Nombre del producto</th>
                                <th>precio</th>
                                <th>Cantidad</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody id="listaCarrito">

                        </tbody>
                    </table>
                </section>
            </section>
            <section>
                <section class="card" style="width: 20vw;">
                    <section class="card-body">
                        <p id="precioTotal">Total:</p>
                        <section class="alert alert-danger d-none" role="alert" id="sinDireccion">
                            No tienes una dirección en el perfil
                        </section>
                        <button id="btnCrearPedido" class="btn btn-primary">Hacer el pedido</button>
                    </section>
                </section>
            </section>
        </section>
    </section>

    <script type="module" src="../navBar.js"></script>
    <script type="module" src="../dashboard.js"></script>
    <script type="module" src="./js/VerMiCarrito.js"></script>
</body>

<template id="ContentPlato">
    <tr>
        <td class="nombrePlato"></td>
        <td class="precioPlato"></td>
        <td class="cantidadPlato"></td>
        <td class="align-content-center">
            <button class="btn btn-danger">eliminar del carrito</button>
        </td>
    </tr>
</template>

</html>