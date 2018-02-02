<?php

namespace App\Http\Controllers;

use Validator;
use App\Film;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    public function index()
    {
        return Film::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'age_limit_id' => 'required|integer',
            'director_id' => 'required|integer',
            'genre_id' => 'required|integer',
            'country_id' => 'required|integer',
            'name' => 'required|unique:films|min:3',
            'duration' => 'required|min:3',
            'description' => 'required|min:3',
            'trailer' => 'required|min:3',
            'cover' => 'required|min:3'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $film = Film::create([
            'age_limit_id' => request('age_limit_id'),
            'director_id' => request('director_id'),
            'genre_id' => request('genre_id'),
            'country_id' => request('country_id'),
            'name' => request('name'),
            'duration' => request('duration'),
            'description' => request('description'),
            'trailer' => request('trailer'),
            'cover' => request('cover'),
        ]);

        return response()->json($film);
    }

    public function show(Film $film)
    {
        return response()->json($film);
    }

    public function update(Request $request, Film $film)
    {
        $validator = Validator::make($request->all(), [
            'age_limit_id' => 'integer',
            'director_id' => 'integer',
            'genre_id' => 'integer',
            'country_id' => 'integer',
            'name' => '|unique:filmsmin:3',
            'duration' => 'min:3',
            'description' => 'min:3',
            'trailer' => 'min:3',
            'cover' => 'min:3'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $film->fill($request->all());

        return response()->json($film);
    }

    public function destroy(Film $film)
    {
        $film->delete();

        return response()->json($film);
    }
}
