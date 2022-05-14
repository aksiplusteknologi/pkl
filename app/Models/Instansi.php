<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instansi extends Model
{
    use HasFactory;

    protected $table = 'instansi';

    protected $fillable = [
        'jenis_perusahaan',
        'status_kepemilikan',
        'nama',
        'text',
        'alamat',
        'latitude',
        'longitude',
    ];
}
