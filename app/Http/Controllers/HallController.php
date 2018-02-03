<?php

namespace App\Http\Controllers;

use Validator;
use App\Hall;
use Illuminate\Http\Request;

class HallController extends Controller
{
    public function index()
    {
        return Hall::with(['cinema:id,name', 'filmFormat'])->get()->all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'place_count' => 'required',
            'cinema_id' => 'required',
            'film_format_id' => 'required'
        ], [
            'required' => 'Поле :attribute обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $newHall = Hall::create([
            'name' => request('name'),
            'place_count' => request('place_count'),
            'cinema_id' => request('cinema_id'),
            'film_format_id' => request('film_format_id')
        ]);

        return Hall::with(['cinema:id,name', 'filmFormat'])->get()->all();
    }

    public function show(Hall $hall)
    {
        return response()->json($hall);
    }

    public function update(Request $request, Hall $hall)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'min:3',
            'place_count' => 'min:1',
            'cinema_id' => 'required',
            'film_format_id' => 'required'
        ], [
            'required' => 'Поле :attribute обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $hall->fill($request->all());

        $hall->save();

        return Hall::with(['cinema:id,name', 'filmFormat'])->get()->all();
    }

    public function destroy(Hall $hall)
    {
        $hall->delete();

        return Hall::with(['cinema:id,name', 'filmFormat'])->get()->all();
    }

    public function batchDelete(Request $request)
    {
        Hall::destroy($request->halls);

        return Hall::with(['cinema:id,name', 'filmFormat'])->get()->all();
    }
}
