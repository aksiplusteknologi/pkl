<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Sekolah;
use Illuminate\Http\Request;

class PubController extends Controller
{
    public function getSekolah()
    {
        return Sekolah::first();
    }
}
