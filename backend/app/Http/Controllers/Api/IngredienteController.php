<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ingrediente;

class IngredienteController extends Controller
{
    public function listarIngredientes()
    {
        return response()->json(Ingrediente::all(), 200);
    }

    public function crearIngrediente(Request $request)
    {
        $ingrediente = Ingrediente::create($request->all());
        return response()->json($ingrediente, 201);
    }

    public function verIngrediente($id)
    {
        $ingrediente = Ingrediente::find($id);
        if (!$ingrediente) return response()->json(['error' => 'No encontrado'], 404);
        return response()->json($ingrediente, 200);
    }

    public function actualizarIngrediente(Request $request, $id)
    {
        $ingrediente = Ingrediente::find($id);
        if (!$ingrediente) return response()->json(['error' => 'No encontrado'], 404);
        
        $ingrediente->update($request->all());
        return response()->json($ingrediente, 200);
    }

    public function borrarIngrediente($id)
    {
        $ingrediente = Ingrediente::find($id);
        if (!$ingrediente) return response()->json(['error' => 'No encontrado'], 404);

        $ingrediente->delete();
        return response()->json(['mensaje' => 'Borrado correctamente'], 200);
    } 
}