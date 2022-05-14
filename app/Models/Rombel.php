<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rombel extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'rombel';
    protected $fillable = [
        'prodi_id',
        'nama',
        'deskripsi',
        'tahun_ajaran'
    ];

    public function prodi()
    {
        return $this->belongsTo(Prodi::class);
    }

    public function siswa()
    {
        return $this->hasMany(Siswa::class);
    }
}
