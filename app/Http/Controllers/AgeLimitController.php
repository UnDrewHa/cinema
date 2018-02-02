<?php

namespace App\Http\Controllers;

use Validator;
use App\AgeLimit;
use Illuminate\Http\Request;

class AgeLimitController extends Controller
{
    public function index()
    {
        return AgeLimit::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $ageLimit = AgeLimit::create([
            'name' => request('name')
        ]);

        return response()->json($ageLimit);
    }

    public function show(AgeLimit $ageLimit)
    {
        return response()->json($ageLimit);
    }

    public function update(Request $request, AgeLimit $ageLimit)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $ageLimit->fill($request->all());

        return response()->json($ageLimit);
    }

    public function destroy(AgeLimit $ageLimit)
    {
        $ageLimit->delete();

        return response()->json($ageLimit);
    }
}
