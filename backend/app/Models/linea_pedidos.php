<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class linea_pedidos extends Model
{
    use HasFactory;

    protected $table = 'public.linea_pedidos';
    
    public $timestamps = false;

    protected $fillable = ['idPedido','idPlato','cantidad','precio_unitario'];
}