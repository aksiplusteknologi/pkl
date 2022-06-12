<?php

namespace Database\Seeders;

use App\Models\Siswa;
use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Init Faker
        $faker = Faker::create('id_ID');


        for ($i = 1; $i <= 640; $i++) {

            $nis = date('Y') . $i;
            $user = new User;
            $user->username = $nis;
            $user->password = bcrypt($nis);
            $user->is_active = 'y';
            $user->user_type = 'siswa';

            if ($user->save()) {
                $siswa = new Siswa;
                $siswa->user_id = $user->id;
                $siswa->rombel_id = $i % 2 == 0 ? 1 : 2;
                $siswa->nis = $nis;
                $siswa->nisn = date('Y') . date('m') . $i;
                $siswa->nama = $faker->name;
                $siswa->jenis_kelamin = $i % 2 == 0 ? 'l' : 'p';
                $siswa->tanggal_lahir = $faker->date($format = 'Y-m-d', $max = 'now');
                $siswa->alamat = $faker->address;
                $siswa->tempat_lahir = $faker->city;

                if ($siswa->save()) {
                    unset($siswa);
                }
            }
        }
    }
}
