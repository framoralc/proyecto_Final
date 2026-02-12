<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php 
        include("../bootstrap.php");
    ?>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar"></nav>

    <form id="inicio">

    <div class="form-floating mb-3 w-25">
        <input class="form-control" type="text" name="name" id="name" placeholder="name">
        <label for="name">Nombre</label>
    </div>
    <div class="form-floating mb-3 w-25">
        <input class="form-control" type="password" name="passw" id="passw" placeholder="password">
        <label class="form-label" for="passw">Contraseña</label>
    </div>

    <button type="submit" class="btn btn-primary mb-3">Iniciar Sesión</button>

    </form>
    <script type="module" src="./js/inicio.js"></script>
    <script type="module" src="../navBar.js"></script>
</body>
</html>