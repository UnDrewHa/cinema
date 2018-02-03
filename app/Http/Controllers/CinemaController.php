<?php

namespace App\Http\Controllers;

use Validator;
use App\Cinema;
use Illuminate\Http\Request;
use Mockery\Exception;

class CinemaController extends Controller
{
    public function index()
    {
        return Cinema::all();
    }

    public function show(Request $request, Cinema $cinema)
    {
        return response()->json($cinema);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:cinemas|max:255',
            'address' => 'required|min:10',
            'phone' => 'required|min:10'
        ], [
            'required' => 'Поле :attribute обязательно для заполнения.',
            'unique' => 'Кинотеатр с таким названием, уже существует.',
            'max' => 'Максимальное количество символов - :max.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 500);
        }

        $newCinema = Cinema::create([
            'name' => request('name'),
            'address' => request('address'),
            'phone' => request('phone'),
            'description' => request('description')
        ]);
        $newCinema->save();

        return Cinema::all();
    }

    public function update(Request $request, Cinema $cinema)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'min:3|max:255|unique:cinemas,name,'.$cinema->id,
            'address' => 'min:10',
            'phone' => 'min:10'
        ], [
            'unique' => 'Кинотеатр с таким названием, уже существует.',
            'max' => 'Максимальное количество символов - :max.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $cinema->fill($request->all());

        $cinema->save();

        return Cinema::all();
    }

    public function destroy(Cinema $cinema)
    {
        $cinema->delete();

        return Cinema::all();
    }
}
