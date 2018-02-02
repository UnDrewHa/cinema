<?php

namespace App\Http\Controllers;

use Validator;
use App\Actor;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    public function index()
    {
        return Actor::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:actors|min:2'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $actor = Actor::create([
            'name' => request('name')
        ]);

        return response()->json($actor);
    }

    public function show(Actor $actor)
    {
        return response()->json($actor);
    }

    public function update(Request $request, Actor $actor)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:actors|min:2'
        ], [
            'required' => 'Поле обязательно для заполнения.',
            'min' => 'Минимальное количество символов - :min.'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $actor->fill($request->all());

        return response()->json($actor);
    }

    public function destroy(Actor $actor)
    {
        $actor->delete();

        return response()->json($actor);
    }
}
