<?php

use App\Http\Controllers\API\Admin\GuruController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PubController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::resource('guru', GuruController::class);
