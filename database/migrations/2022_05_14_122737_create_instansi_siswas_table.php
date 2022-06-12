<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstansiSiswasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instansi_siswa', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pkl_id');
            $table->unsignedBigInteger('siswa_id');
            $table->unsignedBigInteger('instansi_id');
            $table->enum('status', [
                'selesai',
                'berlangsung',
                'batal'
            ]);

            $table->foreign('siswa_id')->references('id')->on('detail_siswa');
            $table->foreign('instansi_id')->references('id')->on('instansi');
            $table->foreign('pkl_id')->references('id')->on('pkl');

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
        Schema::dropIfExists('instansi_siswa');
    }
}
