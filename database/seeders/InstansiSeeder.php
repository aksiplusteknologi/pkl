<?php

namespace Database\Seeders;

use App\Models\Instansi;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class InstansiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID');
        $datas = [
            [
                'jenis_perusahaan' => 'pt',
                'status_kepemilikan' => 'swasta',
                'nama' => 'PT'
            ]
        ];

        for ($i = 1; $i <= 71; $i++) {
            $instansi = new Instansi;
            $instansi->jenis_perusahaan = $i % 2 == 0 ? 'cv' : 'pt';
            $instansi->status_kepemilikan = $i % 2 == 0 ? 'swasta' : 'negeri';
            $instansi->nama = $faker->company;
            $instansi->latitude = $faker->latitude;
            $instansi->longitude = $faker->longitude;
            $instansi->alamat = $faker->address;

            if ($instansi->save()) {
                unset($instansi);
            }
        }
    }
}
