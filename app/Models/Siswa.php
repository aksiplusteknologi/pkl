<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use Faker\Factory as Faker;

class Siswa extends Model
{
    use HasFactory;

    protected $table = 'detail_siswa';

    protected $fillable = [
        'user_id',
        'nisn',
        'nis',
        'nama',
        'tanggal_daftar',
        'tanggal_lahir',
        'tempat_lahir',
        'agama',
    ];

    protected $appends = [
        'pkl'
    ];

    public function rombel()
    {
        return $this->belongsTo(Rombel::class);
    }

    // public function getPklAttribute()
    // {
    //     return 'PKL';
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getPklAttribute()
    {
        return 'ok';
    }
}
