<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlaceType extends Model
{
    public function places() {
        return $this->hasMany(HallPlace::class);
    }
}
