<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plato;

class PlatoController extends Controller
{
    public function listarPlatos()
    {
        return response()->json(Plato::with('ingredientes')->get(), 200);
    }

    public function crearPlato(Request $request)
    {
        $plato = Plato::create($request->all());

        if ($request->has('ingredientes')) {
            $plato->ingredientes()->sync($request->ingredientes);
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

        $plato->update($request->all());

        if ($request->has('ingredientes')) {
            $plato->ingredientes()->sync($request->ingredientes);
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