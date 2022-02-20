<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstansisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instansi', function (Blueprint $table) {
            $table->id();
            $table->enum('jenis_perusahaan', ['pt', 'cv', 'persero', 'lainnya'])->default('lainnya');
            $table->enum('status_kepemilikan', ['swasta', 'negeri'])->default('swasta');
            $table->string('nama');
            $table->string('text')->nullable();
            $table->string('alamat');
            $table->string('latitude');
            $table->string('longitude');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instansi');
    }
}
