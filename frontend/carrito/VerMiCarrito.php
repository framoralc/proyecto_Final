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
        <section class="f-flex gap-3">
            <section id="listaCarrito">

            </section>
            <section>
                <section class="card">
                    <section class="card-body">
                        <p id="precioTotal">Total:</p>
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

</html>