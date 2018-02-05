<?php

namespace App\Http\Controllers;

use Validator;
use App\FilmFormat;
use Illuminate\Http\Request;

class FilmFormatController extends Controller
{
    public function index()
    {
        return FilmFormat::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:film_formats|min:2'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $filmFormat = FilmFormat::create([
            'name' => request('name')
        ]);

        return FilmFormat::all();
    }

    public function show(FilmFormat $filmFormat)
    {
        return response()->json($filmFormat);
    }

    public function update(Request $request, FilmFormat $filmFormat)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:film_formats|min:2'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $filmFormat->fill($request->all());
        $filmFormat->save();

        return FilmFormat::all();
    }

    public function destroy(FilmFormat $filmFormat)
    {
        $filmFormat->delete();

        return FilmFormat::all();
    }

    public function batchDelete(Request $request)
    {
        FilmFormat::destroy($request->filmFormats);

        return FilmFormat::all();
    }
}
