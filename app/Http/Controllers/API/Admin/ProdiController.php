<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProdiRequest;
use App\Models\Prodi;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $datas = Prodi::withCount(['rombel']);

        if ($request->searchTerm) {
            $escaped_str = "%$request->searchTerm%";
        }

        return response()->json($datas->paginate($request->perPage));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProdiRequest $request)
    {
        Prodi::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil membuat Prodi / Jurusan'
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
        $prodi = Prodi::with(['rombel'])->findOrFail($id);

        return response()->json($prodi, 200);
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
        Prodi::findOrFail($id)->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Berhasil memperbaharui Data Prodi / Jurusan'
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
        $prodi = Prodi::findOrFail($id);

        if ($prodi->delete()) {
            return response()->json([
                'status' => true,
                'message' => 'Berhasil menghapus Data Prodi / Jurusan'
            ]);
        }
    }
}
