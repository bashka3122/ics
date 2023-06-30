<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('file_id')->nullable();
            $table->string('name');
            $table->string('tel')->unique();
            $table->string('email')->unique();
            $table->string('gender');
            $table->string('school');
            $table->string('project');
            $table->string('acc');
            $table->decimal('salary');
            $table->string('date');
            $table->string('region');
            $table->string('district');
            $table->string('village');
            $table->string('level');
            $table->string('type');
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
        Schema::dropIfExists('teachers');
    }
}
