<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use App\Hall;
use App\HallPlace;
use Illuminate\Http\Request;

class HallController extends Controller
{
    public function index()
    {
        return Hall::with(['cinema:id,name', 'filmFormat', 'places'])->get()->all();
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


        DB::transaction(function () {
            $func = function($value) {

            };

            $newHall = Hall::create([
                'name' => request('name'),
                'place_count' => request('place_count'),
                'cinema_id' => request('cinema_id'),
                'film_format_id' => request('film_format_id')
            ]);

            if (count(request('scheme')) > 0) {
                $newHall->places()->saveMany(
                    array_map(function($item) {
                        return new HallPlace($item);
                        }, request('scheme'))
                );
            }
        });

        return Hall::with(['cinema:id,name', 'filmFormat'])->get()->all();
    }

    public function show(Hall $hall)
    {
        $data = $hall->load('places');
        return response()->json($hall->load('places'));
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
