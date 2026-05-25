<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plato extends Model
{
    use HasFactory;

    protected $table = 'public.platos';

    public $timestamps = false;

    protected $fillable = ['nombre', 'descripcion', 'categoria' , 'precio', 'imagen_url', 'disponible'];

    public function ingredientes()
    {
        return $this->belongsToMany(
            Ingrediente::class,
            'public.plato_ingredientes',
            'plato_id',
            'ingrediente_id'
        )->withPivot('cantidad_necesaria');
    }
}