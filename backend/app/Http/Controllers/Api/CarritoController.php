<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\carrito;
use Exception;

class CarritoController extends Controller
{
    public function getCarritosUsuario($idUsuario)
    {
        try {
            $totalCarrito = carrito::where('idUsuario', $idUsuario)->get();

            return response()->json($totalCarrito, 200);
        } catch (Exception) {
            return response()->json('no se ha encontrado', 404);
        }
    }

    public function crearCarrito(Request $request)
    {
        try {
            Carrito::create([
                'cantidad' => $request->cantidad,
                'idPlato' => $request->idPlato,
                'idUsuario' => $request->idUsuario
            ]);

            return response()->json('producto metido correctamente', 201);
        } catch (Exception) {
            return response()->json('no se ha podido meter en el carrito', 403);
        }
    }
}
