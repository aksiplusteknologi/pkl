<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SiswaRequest;
use Illuminate\Http\Request;

use App\Models\Siswa;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datas = Siswa::with(['rombel']);

        if ($request->searchTerm) {
            $escaped_str = "%$request->searchTerm%";

            $datas->where('nama', 'LIKE', $escaped_str);
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
    public function store(SiswaRequest $request)
    {
        Siswa::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil membuat Data Siswa',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $siswa = Siswa::with('rombel')->findOrFail($id);

        return response()->json($siswa, 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SiswaRequest $request, $id)
    {
        Siswa::findOrFail($id)->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil membuat Data Siswa',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $siswa = Siswa::findOrFail($id);

        if ($siswa->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Siswa',
            ]);
        }
    }
}
