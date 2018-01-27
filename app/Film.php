<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    public function ageLimit() {
        return $this->belongsTo(AgeLimit::class);
    }

    public function genre() {
        return $this->belongsTo(Genre::class);
    }

    public function director() {
        return $this->belongsTo(Director::class);
    }

    public function country() {
        return $this->belongsTo(Country::class);
    }

    public function actors() {
        return $this->belongsToMany(Actor::class);
    }

    public function licenses() {
        return $this->hasMany(FilmLicense::class);
    }

    public $timestamps = false;
}
