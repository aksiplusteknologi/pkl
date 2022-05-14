<?php

namespace Database\Seeders;

use App\Models\Prodi;
use Illuminate\Database\Seeder;

class ProdiSeeder extends Seeder
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
                'nama' => 'Teknik Komputer dan Jaringan',
                'deskripsi' => 'Jurusan TKJ',
            ],
            [
                'nama' => 'Multimedia',
                'deskripsi' => 'Jurusan MM',
            ]
        ];

        Prodi::insert($datas);
    }
}
