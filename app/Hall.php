<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hall extends Model
{
    public function cinema() {
        return $this->belongsTo(Cinema::class);
    }

    public function filmFormat() {
        return $this->belongsTo(FilmFormat::class);
    }

    public function places() {
        return $this->hasMany(HallPlace::class);
    }

    public function filmSessions() {
        return $this->hasMany(FilmSession::class);
    }

    public $timestamps = false;

    public $guarded = [];
    protected $fillable = ['name', 'place_count', 'cinema_id', 'film_format_id'];
}
