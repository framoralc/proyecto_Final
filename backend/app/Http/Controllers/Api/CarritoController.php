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

    public function eliminarCarrito($id)
{
    try {
        $item = carrito::find($id);
        if (!$item) return response()->json('not found', 404);
        
        $item->delete();
        return response()->json('eliminado', 200);
    } catch (Exception $e) {
        return response()->json('error', 500);
    }
}
}
