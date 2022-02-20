<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSekolahsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sekolah', function (Blueprint $table) {
            $table->id();
            $table->enum('jenjang', ['sd', 'smp', 'sma', 'smk'])->nullable()->default('smk');
            $table->string('logo_sekolah', 255)->nullable();
            $table->string('tahun_ajaran', 255)->nullable();
            $table->enum('jenjang_sekolah', ['sd', 'smp', 'sma', 'smk', 'universitas'])->nullable();
            $table->string('nama_sekolah', 191)->nullable();
            $table->string('npsn', 191)->nullable();
            $table->string('sk_pendirian_sekolah', 191)->nullable();
            $table->date('tanggal_sk_pendirian')->nullable();
            $table->string('sk_izin_operasional', 191)->nullable();
            $table->date('tanggal_sk_izin_operasional')->nullable();
            $table->string('alamat', 191)->nullable();
            $table->string('fax', 191)->nullable();
            $table->string('telephone', 191)->nullable();
            $table->string('email', 191)->nullable();
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
        Schema::dropIfExists('sekolah');
    }
}
