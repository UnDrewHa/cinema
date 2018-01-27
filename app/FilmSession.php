<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FilmSession extends Model
{
    public function filmLicense() {
        return $this->belongsTo(FilmLicense::class);
    }

    public function hall() {
        return $this->belongsTo(Hall::class);
    }

    public $timestamps = false;
}
