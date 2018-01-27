<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FilmFormat extends Model
{
    public function halls() {
        return $this->hasMany(Hall::class);
    }
}
