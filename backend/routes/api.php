<?php

use App\Http\Controllers\Api\SesionController;
use App\Http\Controllers\Api\PlatoController;
use App\Http\Controllers\Api\IngredienteController; // Importamos el nuevo controlador
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [SesionController::class, 'registrarse']);
Route::post('/iniciar', [SesionController::class,'iniciar']);

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