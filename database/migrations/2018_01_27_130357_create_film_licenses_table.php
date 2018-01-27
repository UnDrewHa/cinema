<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilmLicensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('film_licenses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('film_id');
            $table->integer('cinema_id');
            $table->integer('film_format_id');
            $table->integer('show_number');
//            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('film_licenses');
    }
}
