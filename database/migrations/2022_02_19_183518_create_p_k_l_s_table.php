<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePKLSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pkl', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('guru_id');
            $table->string('tahun_ajaran')->unique();
            $table->enum('status', [
                'belum',
                'berlangsung',
                'selesai'
            ])->default('belum');
            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai');
            $table->timestamps();

            $table->foreign('guru_id')->references('id')->on('detail_guru');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pkl');
    }
}
