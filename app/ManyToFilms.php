<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ManyToFilms extends Model
{
    public function films() {
        return $this->hasMany(Film::class);
    }
}
