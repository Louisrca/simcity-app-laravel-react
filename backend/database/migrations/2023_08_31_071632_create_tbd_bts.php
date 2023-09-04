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
        Schema::create('tbd_bts', function (Blueprint $table) {
            $table->id();
            $table->string('date_cession', 20)->nullable();
            $table->string('code_site', 14)->nullable();
            $table->string('type_infra', 255)->nullable();
            $table->string('prioritaire', 3)->nullable();
            $table->string('gb', 15);
            $table->string('controle_clnx', 50)->nullable();
            $table->string('site_bibi', 15);
            $table->string('region', 50);
            $table->string('classe_site', 26)->nullable();
            $table->string('adresse', 88)->nullable();
            $table->integer('cp')->nullable();
            $table->string('ville', 41)->nullable();
            $table->decimal('loyer_declare_fm', 10, 2)->nullable();
            $table->string('charge_prod_ope', 255)->nullable();
            $table->string('charge_prod_sm', 255)->nullable();
            $table->string('charge_prod_hse', 10)->nullable();
            $table->string('part_operation', 255)->nullable();
            $table->string('part_patrimoine', 255)->nullable();
            $table->string('part_hse', 255)->nullable();
            $table->string('pilote_externe', 30)->nullable();
            $table->string('pilote_externe2', 8)->nullable();
            $table->string('pilote_externe3', 30);
            $table->string('etat', 8)->nullable();
            $table->string('verificateurs', 13)->nullable();
            $table->string('arbitrage', 30)->nullable();
            $table->string('avis_op', 8)->nullable();
            $table->string('avis_sm', 8)->nullable();
            $table->string('avis_hse', 8)->nullable();
            $table->string('synthese', 8)->nullable();
            $table->string('levee_de_reserve', 255)->nullable();
            $table->text('commentaires')->nullable();
            $table->string('commentaires_fm', 1147)->nullable();
            $table->string('date_acceptation', 10)->nullable();
            $table->string('date_dernier_commentaire', 20);
            $table->string('date_dernier_commentaire_fm', 255)->nullable();
            $table->string('date_integration', 10)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbd_bts');
    }
};
