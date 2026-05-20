<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plato;

class PlatoController extends Controller
{
    public function listarPlatos()
    {
        return response()->json(Plato::with('ingredientes')->orderBy('id', 'asc')->get(), 200);
    }

    public function crearPlato(Request $request)
    {
        $plato = Plato::create($request->only(['nombre', 'descripcion','categoria', 'precio', 'imagen_url', 'disponible']));

        if ($request->has('ingredientes')) {
            $sync = [];
            foreach ($request->ingredientes as $ing) {
                $sync[$ing['id']] = ['cantidad_necesaria' => $ing['cantidad_necesaria'] ?? 1];
            }
            $plato->ingredientes()->sync($sync);
        }

        return response()->json($plato->load('ingredientes'), 201);
    }

    public function verPlato($id)
    {
        $plato = Plato::with('ingredientes')->find($id);
        if (!$plato) return response()->json(['error' => 'No encontrado'], 404);
        return response()->json($plato, 200);
    }

    public function actualizarPlato(Request $request, $id)
    {
        $plato = Plato::find($id);
        if (!$plato) return response()->json(['error' => 'No encontrado'], 404);

        $plato->update($request->only(['nombre', 'descripcion', 'precio', 'imagen_url', 'disponible']));

        if ($request->has('ingredientes')) {
            $sync = [];
            foreach ($request->ingredientes as $ing) {
                $sync[$ing['id']] = ['cantidad_necesaria' => $ing['cantidad_necesaria'] ?? 1];
            }
            $plato->ingredientes()->sync($sync);
        }

        return response()->json($plato->load('ingredientes'), 200);
    }

    public function borrarPlato($id)
    {
        $plato = Plato::find($id);
        if (!$plato) return response()->json(['error' => 'No encontrado'], 404);

        $plato->delete();
        return response()->json(['mensaje' => 'Borrado correctamente'], 200);
    }
}