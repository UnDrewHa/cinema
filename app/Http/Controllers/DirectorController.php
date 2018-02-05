<?php

namespace App\Http\Controllers;

use Validator;
use App\Director;
use Illuminate\Http\Request;

class DirectorController extends Controller
{
    public function index()
    {
        return Director::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:directors'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $director = Director::create([
            'name' => request('name')
        ]);

        return Director::all();
    }

    public function show(Director $director)
    {
        return response()->json($director);
    }

    public function update(Request $request, Director $director)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:directors,name,'.$director->id
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $director->fill($request->all());
        $director->save();

        return Director::all();
    }

    public function destroy(Director $director)
    {
        $director->delete();

        return Director::all();
    }

    public function batchDelete(Request $request)
    {
        Director::destroy($request->directors);

        return Director::all();
    }
}
