<?php

namespace App\Http\Controllers;

use Validator;
use App\FilmLicense;
use Illuminate\Http\Request;

class FilmLicenseController extends Controller
{
    public function index()
    {
        return FilmLicense::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'film_id' => 'required|integer',
            'cinema_id' => 'required|integer',
            'film_format_id' => 'required|integer',
            'show_number' => 'required|integer',
        ], [
            'required' => 'Поле обязательно для заполнения.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $filmLicense = FilmLicense::create([
            'film_id' => request('film_id'),
            'cinema_id' => request('cinema_id'),
            'film_format_id' => request('film_format_id'),
            'show_number' => request('show_number'),
        ]);

        return response()->json($filmLicense);
    }

    public function show(FilmLicense $filmLicense)
    {
        return response()->json($filmLicense);
    }

    public function update(Request $request, FilmLicense $filmLicense)
    {
        $validator = Validator::make($request->all(), [
            'film_id' => 'integer',
            'cinema_id' => 'integer',
            'film_format_id' => 'integer',
            'show_number' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $filmLicense->fill($request->all());

        return response()->json($filmLicense);
    }

    public function destroy(FilmLicense $filmLicense)
    {
        $filmLicense->delete();

        return response()->json($filmLicense);
    }
}
