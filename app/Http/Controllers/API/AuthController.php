<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $username = trim($request->input('username'));
        $password = trim($request->input('password'));

        // Check if user is exist
        $user = User::where('username', $username)->first();

        if (!$user) {
            return response()->json([
                'status' => 0,
                'message' => 'Ooopps! Data Tidak Ditemukan'
            ]);
        } else {
            // Check if user is in active
            if ($user->is_active != 'y') {
                return response()->json([
                    'status' => 0,
                    'message' => 'Ooopps! Status User Tidak Aktif'
                ]);
            } else {

                $remember_me = $request->has('remember') ? true : false;

                if ($user->status == 'online') {
                    return response()->json([
                        'status' => 0,
                        'message' => 'Ooopps! ' . $user->detail->nama . ' sedang Online'
                    ]);
                }

                // Auth by username & password
                if (auth()->attempt(['username' => $username, 'password' => $password], $remember_me)) {

                    $user->detail;
                    $user->chat_group;

                    $user->status = 'online';

                    //mun alumni ulah asup
                    if ($user->user_type == 'siswa' && $user->detail->is_alumni == 'y') {
                        $data = [
                            'status' => 0,
                            'message' => 'Anda telah lulus dan tidak dapat mengakses Aplikasi.'
                        ];

                        return response()->json($data);
                    }

                    $data = [
                        'status' => 1,
                        'message' => 'Berhasil masuk ke Aplikasi',
                        'token' => $user->createToken('EBELAJAR_' . strtoupper($user->user_type))->accessToken,
                        'user_type' => $user->user_type,
                        'user' => $user,
                    ];

                    return response()->json($data);
                } else {
                    $data = [
                        'status' => 0,
                        'message' => 'Password Salah'
                    ];

                    return response()->json($data);
                }
            }
        }
    }
}
