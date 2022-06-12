<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            AdminSeeder::class,
            ProdiSeeder::class,
            RombelSeeder::class,
            SekolahSeeder::class,
            GuruSeeder::class,
            PKLSeeder::class,
            SiswaSeeder::class,
            InstansiSeeder::class,
            InstansiSiswaSeeder::class,
        ]);
        // \App\Models\User::factory(10)->create();
    }
}
