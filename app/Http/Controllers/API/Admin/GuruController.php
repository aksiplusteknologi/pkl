<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use App\Models\PKL;
use Illuminate\Http\Request;

class GuruController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $datas = Guru::query();

        if ($request->searchTerm) {
            $escaped_str = "%$request->searchTerm%";

            $datas->where('nuptk', 'LIKE', $escaped_str);
        }

        if ($request->sort_type != 'none' && isset($request->sort_field)) {
            $datas->orderBy($request->sort_field, $request->sort_type);
        }

        return response()->json($datas->paginate($request->perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Belum tersedia
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $guru = Guru::findOrFail($id);
        $guru['pkl'] = PKL::with(['guru', 'instansi'])->where('guru_id', $id)->withCount(['siswa']);

        return response()->json($guru);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Belum tersedia
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Belum tersedia
    }
}
