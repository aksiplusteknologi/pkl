<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PKL extends Model
{
    use HasFactory;

    protected $table = 'pkl';

    protected $fillable = [
        'tahun_ajaran',
        'status',
        'guru_id',
        'tanggal_mulai',
        'tanggal_selesai',
    ];

    public function guru()
    {
        return $this->belongsTo(Guru::class);
    }
}
