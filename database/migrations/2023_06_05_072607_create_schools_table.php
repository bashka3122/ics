<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('file_id')->nullable();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('no')->unique();
            $table->string('region');
            $table->string('district');
            $table->string('village');
            $table->string('manager');
            $table->string('emisno')->unique();
            $table->string('type');

            $table->string('tell')->unique();
            $table->string('oemail')->unique();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schools');
    }
}
