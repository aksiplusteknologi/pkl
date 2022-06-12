<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instansi extends Model
{
    use HasFactory;

    protected $table = 'instansi';

    protected $attributes = [
        // 'show_pkl',
    ];

    protected $fillable = [
        'jenis_perusahaan',
        'status_kepemilikan',
        'nama',
        'text',
        'alamat',
        'latitude',
        'longitude',
    ];

    public function siswa()
    {
        return $this->belongsToMany(Siswa::class, 'instansi_siswa',);
    }

    public function pkl()
    {
        return $this->belongsToMany(Siswa::class, 'instansi_siswa', 'pkl_id');
    }
    public function getShowPklAttribute()
    {
        return PKL::where('instansi_id', $this->id)->distinct()->groupBy('tahun_ajaran')->get();
    }
}
