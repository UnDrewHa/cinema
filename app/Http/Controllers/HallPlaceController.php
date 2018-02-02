<?php

namespace App\Http\Controllers;

use Validator;
use App\HallPlace;
use Illuminate\Http\Request;

class HallPlaceController extends Controller
{
    public function index()
    {
        return HallPlace::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'hall_id' => 'required|integer',
            'row' => 'required|integer',
            'column' => 'required|integer',
            'is_active' => 'required|boolean'
        ], [
            'required' => 'Поле обязательно для заполнения.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $hallPlace = HallPlace::create([
            'hall_id' => request('hall_id'),
            'row' => request('row'),
            'column' => request('column'),
            'is_active' => request('is_active')
        ]);

        return response()->json($hallPlace);
    }

    public function show(HallPlace $hallPlace)
    {
        return response()->json($hallPlace);
    }

    public function update(Request $request, HallPlace $hallPlace)
    {
        $validator = Validator::make($request->all(), [
            'hall_id' => 'required|integer',
            'row' => 'required|integer',
            'column' => 'required|integer',
            'is_active' => 'required|boolean'
        ], [
            'required' => 'Поле обязательно для заполнения.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $hallPlace->fill($request->all());

        return response()->json($hallPlace);
    }

    public function destroy(HallPlace $hallPlace)
    {
        $hallPlace->delete();

        return response()->json($hallPlace);
    }
}
