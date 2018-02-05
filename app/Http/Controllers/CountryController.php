<?php

namespace App\Http\Controllers;

use Validator;
use App\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index()
    {
        return Country::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:countries'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $country = Country::create([
            'name' => request('name')
        ]);

        return Country::all();
    }

    public function show(Country $country)
    {
        return response()->json($country);
    }

    public function update(Request $request, Country $country)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:countries|min:2'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $country->fill($request->all());
        $country->save();

        return Country::all();
    }

    public function destroy(Country $country)
    {
        $country->delete();

        return Country::all();
    }

    public function batchDelete(Request $request)
    {
        Country::destroy($request->countries);

        return Country::all();
    }
}
