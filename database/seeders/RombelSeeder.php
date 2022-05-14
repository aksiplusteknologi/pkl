<?php

namespace Database\Seeders;

use App\Models\Rombel;
use Illuminate\Database\Seeder;

class RombelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datas = [
            [
                'prodi_id' => 1,
                'nama' => 'X TKJ 1',
                'tahun_ajaran' => '2021/2022'
            ],
            [
                'prodi_id' => 2,
                'nama' => 'X MM 1',
                'tahun_ajaran' => '2021/2022'
            ],
        ];

        Rombel::insert($datas);
    }
}
