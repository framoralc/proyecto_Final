<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registrarse</title>
</head>

<body>
    <?php
    include("./navBar.php");
    ?>

    <form action="">

    <label class="form-label" for="name">Nombre</label>
    <input class="form-control" type="text" name="name" id="name">

    <label class="form-label" for="eMail">Email</label>
    <input class="form-control" type="text" name="eMail" id="eMail">

    <label class="form-label" for="passw">Contraseña</label>
    <input class="form-control" type="text" name="passw" id="passw">

    <label class="form-label" for="repPassw">Repetir Contraseña</label>
    <input class="form-control" type="text" name="repPassw" id="repPassw">

    <button type="submit" class="btn btn-primary mb-3">Registrarse</button>

    </form>

    <script type="module" src=""></script>
</body>

</html>