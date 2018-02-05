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
            'name' => 'required|unique:genres'
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

        return Genre::all();
    }

    public function show(Genre $genre)
    {
        return response()->json($genre);
    }

    public function update(Request $request, Genre $genre)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:genres,name,'.$genre->id
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $genre->fill($request->all());
        $genre->save();

        return Genre::all();
    }

    public function destroy(Genre $genre)
    {
        $genre->delete();

        return Genre::all();
    }

    public function batchDelete(Request $request)
    {
        Genre::destroy($request->genres);

        return Genre::all();
    }
}
