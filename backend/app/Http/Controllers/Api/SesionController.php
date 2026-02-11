<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class SesionController extends Controller
{
    public function registrarse(Request $request)
    {

        $datos = $request->validate([
            'nombre' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'direccion' => 'nullable',
        ]);

        $usuario = \App\Models\User::create([
            'nombre' => $request->nombre,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'rol' => $request->rol,
            'direccion' => $request->direccion,
        ]);

        return response()->json($usuario, 201);
    }

    public function iniciar(Request $request) {}
}
