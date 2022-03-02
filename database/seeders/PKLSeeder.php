<?php

namespace Database\Seeders;

use App\Models\Guru;
use App\Models\PKL;
use Illuminate\Database\Seeder;

class PKLSeeder extends Seeder
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
                'tahun_ajaran' => '2019/2020',
                'status' => 'selesai',
                'guru_id' => Guru::first()->id,
                'tanggal_mulai' => '2020-01-01',
                'tanggal_selesai' => '2020-03-01',
            ],

            [
                'tahun_ajaran' => '2020/2021',
                'status' => 'selesai',
                'guru_id' => Guru::first()->id,
                'tanggal_mulai' => '2021-01-01',
                'tanggal_selesai' => '2021-03-01',
            ],
            [
                'tahun_ajaran' => '2021/2022',
                'status' => 'berlangsung',
                'guru_id' => Guru::first()->id,
                'tanggal_mulai' => '2022-01-01',
                'tanggal_selesai' => '2022-03-01',
            ],
        ];

        foreach ($datas as $data) {
            $pkl = PKL::firstOrNew([
                'tahun_ajaran' => $data['tahun_ajaran'],
                'status' => $data['status'],
                'guru_id' => $data['guru_id'],
                'tanggal_mulai' => $data['tanggal_mulai'],
                'tanggal_selesai' => $data['tanggal_selesai'],
            ]);

            if ($pkl->save()) {
                unset($pkl);
            }
        }
    }
}
