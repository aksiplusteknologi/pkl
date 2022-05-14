<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class InstansiRequest extends FormRequest
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
            'jenis_perusahaan' => 'required',
            'status_kepemilikan' => 'required',
            'nama' => 'required',
            'text' => 'nullable',
            'alamat' => 'nullable',
            'latitude' => 'required',
            'longitude' => 'required',
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
            'month.required' => 'Lama membership tidak boleh kosong',
            'month.numeric' => 'Lama membership harus berupa angka',
            'month.min' => 'Lama membership minimal 1',
        ];
    }
}
