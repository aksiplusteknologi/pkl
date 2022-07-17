<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    use HasFactory;

    protected $table = 'detail_guru';

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function pkl()
    {
        return $this->hasMany(PKL::class)->distinct();
    }
}
