<?php

namespace App;

use App\ManyToFilms;

class Actor extends ManyToFilms
{
    public function films() {
        return $this->belongsToMany(Film::class);
    }
}
