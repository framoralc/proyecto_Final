<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plato extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = ['nombre', 'descripcion', 'precio', 'imagen_url', 'disponible'];

    public function ingredientes()
    {
        return $this->belongsToMany(
            Ingrediente::class,
            'plato_ingredientes',
            'plato_id',
            'ingrediente_id'
        )->withPivot('cantidad_necesaria');
    }
}