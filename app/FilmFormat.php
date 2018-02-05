<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FilmFormat extends Model
{
    public function halls() {
        return $this->hasMany(Hall::class);
    }

    public function filmLicenses() {
        return $this->hasMany(FilmLicense::class);
    }

    public $timestamps = false;
    public $guarded = [];
    public $fillable = ['name'];
}
