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
Route::get('/pkl/get/siswa/{pkl_id}', [PKLController::class, 'getSiswa']);
Route::post('/pkl/add/siswa', [PKLController::class, 'addSiswa']);
Route::resource('instansi', InstansiController::class);
Route::get('/instansi/get_siswa/{pkl_id}/{instansi_id}', [InstansiController::class, 'siswa']);
Route::resource('siswa', SiswaController::class);
Route::resource('rombel', RombelController::class);
Route::resource('prodi', ProdiController::class);
