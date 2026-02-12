<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registrarse</title>
    <?php 
        include("../bootstrap.php");
    ?>
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>

    <form>
        <div class="form-floating mb-3 w-25">
            <input class="form-control" type="text" name="name" id="name" placeholder="name">
            <label for="name">Nombre</label>
        </div>
        <div class="form-floating mb-3 w-25">
            <input class="form-control" type="email" name="eMail" id="eMail" placeholder="email@example.com">
            <label class="form-label" for="eMail">Email</label>
        </div>
        <div class="form-floating mb-3 w-25">
            <input class="form-control" type="password" name="passwd" id="passwd" placeholder="password">
            <label class="form-label" for="passwd">Contraseña</label>
            <div id="passwd" class="invalid-feedback">
                No coincide la contraseña.
            </div>
        </div>
        <div class="form-floating mb-3 w-25">
            <input class="form-control" type="password" name="repPasswd" id="repPasswd" placeholder="repPassword">
            <label class="form-label" for="repPasswd">Repetir Contraseña</label>
            <div id="repPasswd" class="invalid-feedback">
                No coincide la contraseña.
            </div>
        </div>

        <button type="submit" class="btn btn-primary mb-3">Registrarse</button>

    </form>

    <script type="module" src="./js/registro.js"></script>
    <script type="module" src="../navBar.js"></script>
</body>

</html>