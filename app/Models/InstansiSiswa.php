<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InstansiSiswa extends Model
{
    use HasFactory;

    protected $table = 'instansi_siswa';

    public function instansi()
    {
        return $this->belongsTo(Instansi::class);
    }

    public function pkl()
    {
        return $this->belongsTo(PKL::class);
    }
}
