<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class ProdiRequest extends FormRequest
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
            'nama' => 'required',
            'deskripsi' => 'required',
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
            'nama.required' => 'Nama prodi / jurusan tidak boleh kosong',
        ];
    }
}
