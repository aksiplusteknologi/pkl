<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Guru;
use App\Models\User;
use Illuminate\Database\Seeder;

class GuruSeeder extends Seeder
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
                'nuptk' => '1010',
                'nama' => 'Jajang Suhendar',
                'tempat_lahir' => 'Garut',
                'tanggal_lahir' => '1996/09/09',
                'alamat' => 'Enhaka Residence Blok C7 Garut',
                'agama' => 'islam',
                'jenis_kelamin' => 'l',
            ],
            [
                'nuptk' => '1011',
                'nama' => 'Maman Abdurrahman',
                'tempat_lahir' => 'Bandung',
                'tanggal_lahir' => '1976/01/12',
                'alamat' => 'Jl. Semangka Bandung',
                'agama' => 'islam',
                'jenis_kelamin' => 'l',
            ],
            [
                'nuptk' => '1012',
                'nama' => 'Cecep Saepulloh',
                'tempat_lahir' => 'Jakarta',
                'tanggal_lahir' => '1984/12/11',
                'alamat' => 'Jl. Nanas Jakarta',
                'agama' => 'islam',
                'jenis_kelamin' => 'l',
            ],
        ];

        foreach ($datas as $data) {
            $user = User::where('username', $data['nuptk'])->first();

            if (!$user) {
                $user = new User;
                $user->username = $data['nuptk'];
                $user->password = bcrypt($data['nuptk']);
                $user->is_active = 'y';
                $user->user_type = 'guru';

                if ($user->save()) {
                    $admin = new Guru;
                    $admin->user_id = $user->id;
                    $admin->nuptk = $data['nuptk'];
                    $admin->nama = $data['nama'];
                    $admin->tempat_lahir = $data['tempat_lahir'];
                    $admin->tanggal_lahir = $data['tanggal_lahir'];
                    $admin->alamat = $data['alamat'];
                    $admin->agama = $data['agama'];
                    $admin->jenis_kelamin = $data['jenis_kelamin'];
                    $admin->save();
                }
            }
        }
    }
}
