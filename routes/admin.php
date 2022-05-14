<?php

use App\Http\Controllers\API\Admin\{
  DashboardController,
  GuruController,
  InstansiController,
  PKLController,
  ProdiController,
  RombelController,
  SiswaController,
};
use App\Http\Controllers\API\{
  AuthController,
  PubController,
};
use Illuminate\Support\Facades\Route;


Route::resource('dashboard', DashboardController::class);
Route::resource('guru', GuruController::class);
Route::resource('pkl', PKLController::class);
Route::resource('instansi', InstansiController::class);
Route::resource('siswa', SiswaController::class);
Route::resource('rombel', RombelController::class);
Route::resource('prodi', ProdiController::class);
