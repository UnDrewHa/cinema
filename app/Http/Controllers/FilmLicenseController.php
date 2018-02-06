<?php

namespace App\Http\Controllers;

use Validator;
use App\FilmLicense;
use Illuminate\Http\Request;

class FilmLicenseController extends Controller
{
    public function index()
    {
        return FilmLicense::with(['cinema', 'film:id,name', 'filmFormat'])->get()->all();
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

        return FilmLicense::with(['cinema', 'film:id,name', 'filmFormat'])->get()->all();
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
        $filmLicense->save();

        return response()->json($filmLicense);
    }

    public function destroy(FilmLicense $filmLicense)
    {
        $filmLicense->delete();

        return FilmLicense::with(['cinema', 'film:id,name', 'filmFormat'])->get()->all();
    }

    public function batchDelete(Request $request)
    {
        FilmLicense::destroy($request->licenses);

        return FilmLicense::with(['cinema', 'film:id,name', 'filmFormat'])->get()->all();
    }
}
