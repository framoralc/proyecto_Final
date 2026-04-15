<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use function Laravel\Prompts\error;

class SesionController extends Controller
{
    public function registrarUsuario(Request $request)
    {

        if (User::where('nombre', $request->usuario)->first()) {

            return response()->json("El usuario ya existe", 409);
        } else {
            $usuario = User::create([
                'nombre' => $request->nombre,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'rol' => $request->rol,
                'direccion' => $request->direccion,
            ]);

            return response()->json($usuario, 201);
        }
    }

    public function iniciarSesion(Request $request)
    {

        $usuario = User::where('email', $request->email)->first();

        if (!$usuario) {
            return response()->json(["No existe el usuario"], 404);
        }

        if (Hash::check($request->password, $usuario->password)) {
            return response()->json([
                "mensaje" => "Acceso correcto",
                "id" => $usuario->id,
                "usuario" => $usuario->nombre,
                "rol" => $usuario->rol,
                "direccion" => $usuario->direccion,
                "email" => $usuario->email
            ], 200);
        } else {
            return response()->json(["error" => "Contraseña incorrecta"], 401);
        }
    }

    // Actualizar información del perfil

        public function actualizarNombre(Request $request) 
    {
        $usuario = User::find($request->id);

        if($usuario){
            $usuario->nombre = $request->nombre;
            $usuario->save();

            return response()->json(["mensaje" => "El nombre se ha actualizado"], 200);
        }
        else{
            return response()->json(["error" => "Perfil no encontrado"], 404);
        }
    }

    public function actualizarPassword(Request $request)
    {
        $usuario = User::find($request->id);

        if ($usuario) {
            $usuario->password = Hash::make($request->password);
            $usuario->save();

            return response()->json([
                "mensaje" => "Contraseña Actualizada"
            ], 200);
        } else {
            return response()->json(["error" => "Perfil no encontrado"], 404);
        }
    }

    public function actualizarEmail(Request $request)
    {
        $usuario = User::find($request->id);

        if ($usuario){
            $usuario->email = $request->email;
            $usuario->save();

            return response()->json(["mensaje" => "Se ha cambiado correctamente"], 200);
        } else {
            return response()->json(["error" => "Perfil no encontrado"], 404);
        }

    }

    public function eliminarUsuario($id)
    {
        $usuario = User::find($id);

        if (!$usuario) {
            return response()->json(['message' => 'no se ha encontrado'], 404);
        } else {
            $usuario->delete();
            return response()->json(['message' => 'se ha eliminado correctamente'], 200);
        }
    }

    // Recoger datos de usuarios

    public function recogerInformacion(Request $request){

        $usuario = User::find($request->id);

        if($usuario){
            return response()->json(['message' => 'se ha recogido correctamente',
                                    'usuario' => $usuario->nombre,
                                    'rol' => $usuario->rol,
                                    'direccion' => $usuario->direccion,
                                    'email' => $usuario->email
                                    ], 200);
        }
        else{
            return response()->json(['error' => 'no se ha encontrado'], 404);
        }
    }

    // Lista de usuarios

    public function contarUsuarios()
    {
        $totalUsuarios = User::count();

        return response()->json(['count' => $totalUsuarios], 200);
    }

    public function mostrarUsuarios(Request $request)
    {
        if (count($request->rol) == 1) {
            $result = User::orderBy('id', 'asc')->limit($request->limit)->offset($request->offset)->get()->makeHidden('password')->where('rol', $request->rol);
        } else {
            $result = User::orderBy('id', 'asc')->limit($request->limit)->offset($request->offset)->get()->makeHidden('password')->whereIn('rol', $request->rol);
        }

        return response()->json(['usuarios' => $result], 200);
    }
}
