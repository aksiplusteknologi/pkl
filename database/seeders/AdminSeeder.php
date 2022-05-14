<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::where('username', 'admin')->first();

        if (!$user) {
            $user = new User;
            $user->username = 'admin';
            $user->password = bcrypt('admin');
            $user->is_active = 'y';
            $user->user_type = 'admin';

            if ($user->save()) {

                $admin = new Admin();
                $admin->nama = 'Administrator';
                $admin->user_id = $user->id;
                $admin->save();
            }
        }
    }
}
