<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return response()->json([
            'status' => 0,
            'message' => 'Gagal Login',
            'data' => null
        ]);
    }
}
