<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('plato_ingredientes', function (Blueprint $table) {
        $table->id();
        // Claves foráneas (Relacionan con las otras tablas)
        $table->foreignId('plato_id')->constrained('platos')->onDelete('cascade');
        $table->foreignId('ingrediente_id')->constrained('ingredientes')->onDelete('cascade');
        
        // Columna extra que pediste
        $table->integer('cantidad_necesaria')->default(1);
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plato_ingredientes');
    }
};
