<?php

namespace Database\Seeders;

use App\Models\Instansi;
use App\Models\InstansiSiswa;
use App\Models\PKL;
use App\Models\Siswa;
use Illuminate\Database\Seeder;

class InstansiSiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $instansi_count = Instansi::count();
        $pkl_active = PKL::where('status', 'berlangsung')->first();

        for ($i = 1; $i <= 220; $i++) {
            $instansi_siswa = new InstansiSiswa;
            $instansi_siswa->pkl_id = $pkl_active->id;
            $instansi_siswa->siswa_id = $i;
            $instansi_siswa->instansi_id = rand(1, $instansi_count);
            $instansi_siswa->status = 'berlangsung';

            if ($instansi_siswa->save()) {
                unset($instansi_siswa);
            }
        }

        for ($i = 221; $i <= 400; $i++) {
            $instansi_siswa = new InstansiSiswa;
            $instansi_siswa->pkl_id = 1;
            $instansi_siswa->siswa_id = $i;
            $instansi_siswa->instansi_id = rand(1, $instansi_count);
            $instansi_siswa->status = 'selesai';

            if ($instansi_siswa->save()) {
                unset($instansi_siswa);
            }
        }

        for ($i = 401; $i <= 590; $i++) {
            $instansi_siswa = new InstansiSiswa;
            $instansi_siswa->pkl_id = 2;
            $instansi_siswa->siswa_id = $i;
            $instansi_siswa->instansi_id = rand(1, $instansi_count);
            $instansi_siswa->status = 'selesai';

            if ($instansi_siswa->save()) {
                unset($instansi_siswa);
            }
        }
    }
}
