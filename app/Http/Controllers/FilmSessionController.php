<?php

namespace App\Http\Controllers;

use Validator;
use App\FilmSession;
use Illuminate\Http\Request;

class FilmSessionController extends Controller
{
    public function index()
    {
        return FilmSession::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'film_license_id' => 'required|integer',
            'hall_id' => 'required|integer',
            'start_from' => 'required',
        ], [
            'required' => 'Поле обязательно для заполнения.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $filmSession = FilmSession::create([
            'film_license_id' => request('film_license_id'),
            'hall_id' => request('hall_id'),
            'start_from' => request('start_from'),
        ]);

        return response()->json($filmSession);
    }

    public function show(FilmSession $filmSession)
    {
        return response()->json($filmSession);
    }

    public function update(Request $request, FilmSession $filmSession)
    {
        $validator = Validator::make($request->all(), [
            'film_license_id' => 'required|integer',
            'hall_id' => 'required|integer',
            'start_from' => 'required',
        ], [
            'required' => 'Поле обязательно для заполнения.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $filmSession->fill($request->all());

        return response()->json($filmSession);
    }

    public function destroy(FilmSession $filmSession)
    {
        $filmSession->delete();

        return response()->json($filmSession);
    }
}
