<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Models\Instansi;
use App\Models\InstansiSiswa;
use Illuminate\Http\Request;

use App\Models\PKL;
use App\Models\Rombel;
use App\Models\Siswa;

class PKLController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datas = PKL::with(['guru', 'instansi'])->withCount(['siswa']);


        if ($request->searchTerm) {
            $escaped_str = "%$request->searchTerm%";

            $datas->where('tahun_ajaran', 'LIKE', $escaped_str);
        }

        if ($request->sort_type != 'none' && isset($request->sort_field)) {
            $datas->orderBy($request->sort_field, $request->sort_type);
        }

        return response()->json($datas->paginate($request->perPage));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json(PKL::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pkl = PKL::with(['guru', 'siswa.rombel', 'instansi'])->find($id);

        return response()->json($pkl);
    }

    public function addSiswa(Request $request)
    {
        $instansi_siswa = new InstansiSiswa;
        $instansi_siswa->siswa_id = $request->siswa_id;
        $instansi_siswa->pkl_id = $request->pkl_id;
        $instansi_siswa->instansi_id = $request->instansi_id;
        $instansi_siswa->status = 'berlangsung';

        if ($instansi_siswa->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menambahkan siswa ',
            ]);
        }
    }

    public function getSiswa($pkl_id)
    {
        $pkl = PKL::findOrFail($pkl_id);

        $rombel_id = Rombel::where('tahun_ajaran', $pkl->tahun_ajaran)->pluck('id')->toArray();
        $instansi_siswa = InstansiSiswa::where('pkl_id', $pkl_id)->pluck('siswa_id')->toArray();

        $siswa = Siswa::whereIn('rombel_id', $rombel_id)->with(['rombel'])->whereNotIn('id', $instansi_siswa)->get();

        return $siswa;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
