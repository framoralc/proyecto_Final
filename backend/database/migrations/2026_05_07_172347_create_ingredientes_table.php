<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ingredientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->decimal('stock_actual', 8, 2)->default(0);
            $table->string('unidad_medida')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ingredientes');
    }
};