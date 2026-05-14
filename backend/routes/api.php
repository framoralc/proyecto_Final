<?php

use App\Http\Controllers\api\CarritoController;
use App\Http\Controllers\api\PedidoController;
use App\Http\Controllers\api\PlatoContoller;
use App\Http\Controllers\Api\SesionController;
use App\Http\Controllers\Api\PlatoController;
use App\Http\Controllers\Api\IngredienteController; // Importamos el nuevo controlador
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Sesiones

Route::post('/registrarUsuario', [SesionController::class, 'registrarUsuario']);

Route::post('/iniciarSesion', [SesionController::class, 'iniciarSesion']);

// actualizar información del perfil

Route::post('/actualizarPassword', [SesionController::class, 'actualizarPassword']);

Route::post('/actualizarNombre', [SesionController::class, 'actualizarNombre']);

Route::post('/actualizarEmail', [SesionController::class, 'actualizarEmail']);

// Recoger información usuarios y empleados

Route::get('/recogerInformacion', [SesionController::class, 'recogerInformacion']);

Route::delete('/eliminarUsuario/{id}', [SesionController::class, 'eliminarUsuario']);

Route::get('/contarUsuarios/{rol}', [SesionController::class, 'contarUsuarios']);

Route::get('/contarEmpleados', [SesionController::class, 'contarEmpleados']);

Route::post('/mostrarUsuarios', [SesionController::class, 'mostrarUsuarios']);

Route::post('/seleccionarRepartidor', [SesionController::class, 'obtenerRepartidor']);
// Recoger información Carrito

Route::get('/recogerCarrito/{idUsuario}', [CarritoController::class, 'getCarritosUsuario']);

// Platos 


// pedido




Route::post('/crearPedido', [PedidoController::class, 'crearPedido']);

Route::get('/platos', [PlatoController::class, 'listarPlatos']);
Route::post('/platos', [PlatoController::class, 'crearPlato']);
Route::get('/platos/{id}', [PlatoController::class, 'verPlato']);
Route::put('/platos/{id}', [PlatoController::class, 'actualizarPlato']);
Route::delete('/platos/{id}', [PlatoController::class, 'borrarPlato']);

Route::get('/ingredientes', [IngredienteController::class, 'listarIngredientes']);
Route::post('/ingredientes', [IngredienteController::class, 'crearIngrediente']);
Route::get('/ingredientes/{id}', [IngredienteController::class, 'verIngrediente']);
Route::put('/ingredientes/{id}', [IngredienteController::class, 'actualizarIngrediente']);
Route::delete('/ingredientes/{id}', [IngredienteController::class, 'borrarIngrediente']);
