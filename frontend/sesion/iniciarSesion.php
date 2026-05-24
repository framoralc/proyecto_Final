<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashfood - Iniciar Sesión</title>
    <?php
    include("../bootstrap.php");
    ?>
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>
    <section class="d-flex justify-content-center mt-5">
        <section class="w-100 d-flex flex-column align-items-center">
            <h3>Iniciar Sesion</h3>
            <form class="w-100 d-flex flex-column align-items-center" id="inicio">

                <section class="form-floating mb-3 w-25">
                    <input class="form-control" type="text" name="username" id="username" placeholder="nombre de Usuario">
                    <label for="username">Nombre de usuario</label>
                </section>
                <section class="form-floating mb-3 w-25">
                    <input class="form-control" type="password" name="passw" id="passw" placeholder="password">
                    <label class="form-label" for="passw">Contraseña</label>
                </section>

                <button type="submit" class="btn btn-primary mb-3">Iniciar Sesión</button>

            </form>
        </section>

    </section>

    <script type="module" src="./js/iniciarSesion.js"></script>
    <script type="module" src="../navBar.js"></script>
</body>

</html>