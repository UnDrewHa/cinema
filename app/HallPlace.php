<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HallPlace extends Model
{
    public function hall() {
        return $this->belongsTo(Hall::class);
    }

    public function placeType() {
        return $this->belongsTo(PlaceType::class);
    }
}
