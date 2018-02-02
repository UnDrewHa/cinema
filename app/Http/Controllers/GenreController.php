<?php

namespace App\Http\Controllers;

use Validator;
use App\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index()
    {
        return Genre::all();
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

        $genre = Genre::create([
            'name' => request('name')
        ]);

        return response()->json($genre);
    }

    public function show(Genre $genre)
    {
        return response()->json($genre);
    }

    public function update(Request $request, Genre $genre)
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

        $genre->fill($request->all());

        return response()->json($genre);
    }

    public function destroy(Genre $genre)
    {
        $genre->delete();

        return response()->json($genre);
    }
}
