<?php

use App\Http\Controllers\API\Siswa\DashboardController;
use Illuminate\Support\Facades\Route;

Route::resource('dashboard', DashboardController::class);
