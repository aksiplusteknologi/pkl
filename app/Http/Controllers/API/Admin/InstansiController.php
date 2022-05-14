<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\InstansiRequest;
use Illuminate\Http\Request;

use App\Models\Instansi;

class InstansiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datas = Instansi::query();

        if ($request->searchTerm) {
            $escaped_str = "%$request->searchTerm%";

            $datas->where('jenis_perusahaan', 'LIKE', $escaped_str);
            $datas->orWhere('nama', 'LIKE', $escaped_str);
            $datas->orWhere('alamat', 'LIKE', $escaped_str);
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InstansiRequest $request)
    {
        Instansi::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil membuat Data Instansi',
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $instansi = Instansi::findOrFail($id);

        return response()->json($instansi);
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
        Instansi::where('id', $id)->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil memperbaharui Data Instansi',
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $instansi = Instansi::findOrFail($id);

        if ($instansi->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Data Instansi',
            ], 200);
        }
    }
}
