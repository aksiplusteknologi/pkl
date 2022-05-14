<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class SiswaRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->id;

        return [
            'user_id' => 'nullable|integer|unique:detail_siswa,user_id,' . $id,
            'nisn' => 'required|integer|unique:detail_siswa,nisn,' . $id,
            'nis' => 'required|integer|unique:detail_siswa,nis,' . $id,
            'nama' => 'required|string',
            'tanggal_daftar' => 'date|nullable',
            'tanggal_lahir' => 'date|nullable',
            'tempat_lahir' => 'string|nullable',
            'agama' => 'string|required',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $error = $validator->errors();

        $response = response()->json([
            'status' => false,
            'message' => "Form can't be processed",
            'data' => $error
        ], 200);
        throw new HttpResponseException($response);
    }

    public function messages() //OPTIONAL
    {
        return [
            'ktp.required' => 'KTP harus diisi',
            'ktp.mimes' => 'Format KTP yang diizinkan hanya PNG, JPG, JPEG',
            'ktp.max' => 'Max ukuran KTP adalah 2 MB',
            'rfid.required' => 'RFID tidak boleh kosong.',
            'rfid.unique' => 'RFID sudah digunakan.',
            'name.required' => 'Nama tidak boleh kosong',
            'phone_number.required' => 'No Telpon tidak boleh kosong',
            'appartment_no.required' => 'Nomor Appartment tidak boleh kosong',
            'appartment_no.unique' => 'Nomor Appartment sudah digunakan.',
            'month.required' => 'Lama detail_siswahip tidak boleh kosong',
            'month.numeric' => 'Lama detail_siswahip harus berupa angka',
            'month.min' => 'Lama detail_siswahip minimal 1',
        ];
    }
}
