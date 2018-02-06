<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use App\Film;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    public function index()
    {
        return Film::with(['director:id,name', 'genre:id,name', 'country:id,name', 'ageLimit:id,name'])->get()->all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'age_limit_id' => 'required|integer',
            'director_id' => 'required|integer',
            'genre_id' => 'required|integer',
            'country_id' => 'required|integer',
            'name' => 'required|unique:films',
            'duration' => 'required',
            'description' => 'required',
            'trailer' => 'required',
            'cover' => 'required'
        ], [
            'required' => 'Поле обязательно для заполнения.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        DB::transaction(function () {
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

            if (count(request('actors')) > 0) {
                $film->actors()->sync(request('actors'));
            }
        });

        return Film::with(['director:id,name', 'genre:id,name', 'country:id,name', 'ageLimit:id,name'])->get()->all();
    }

    public function show(Film $film)
    {
        return response()->json($film->load('actors'));
    }

    public function update(Request $request, Film $film)
    {
        $validator = Validator::make($request->all(), [
            'age_limit_id' => 'integer',
            'director_id' => 'integer',
            'genre_id' => 'integer',
            'country_id' => 'integer',
            'name' => '|unique:films,name,'.$film->id,
            'duration' => 'min:1',
            'description' => 'min:1',
            'trailer' => 'min:1',
            'cover' => 'min:1'
        ], [
            'required' => 'Поле обязательно для заполнения.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $film->fill($request->all());
        $film->save();

        if (count(request('actors')) > 0) {
            $film->actors()->sync(request('actors'));
        }

        return Film::with(['director:id,name', 'genre:id,name', 'country:id,name', 'ageLimit:id,name'])->get()->all();
    }

    public function destroy(Film $film)
    {
        $film->delete();

        return Film::with(['director:id,name', 'genre:id,name', 'country:id,name', 'ageLimit:id,name'])->get()->all();
    }

    public function batchDelete(Request $request)
    {
        Film::destroy($request->films);

        return Film::with(['director:id,name', 'genre:id,name', 'country:id,name', 'ageLimit:id,name'])->get()->all();
    }
}
