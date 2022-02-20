<?php

namespace Database\Seeders;

use App\Models\Sekolah;
use Illuminate\Database\Seeder;

class SekolahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $setting = Sekolah::firstOrNew(['id' => 1]);
        $setting->tahun_ajaran = '2021/2022';
        $setting->nama_sekolah = 'SMK Darussalam Tarogong Kaler';
        $setting->npsn = '69858460';
        $setting->sk_pendirian_sekolah = '84.10/YDG.SMK';
        $setting->tanggal_sk_pendirian = '2013-12-02';
        $setting->sk_izin_operasional = '425.11/4109/Disdik';
        $setting->tanggal_sk_izin_operasional = '2013-12-27';
        $setting->alamat = 'Kp. Cilame, RT.04/RW.06, Sukajadi, Kec. Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151';
        $setting->telephone = '081221167671';
        $setting->email = 'smk@mail.com';

        $setting->save();
    }
}
