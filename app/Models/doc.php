<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class doc extends Model
{
    use HasFactory;
    protected $fillable = [
        'file', 'name', 'mime', 'size', 'file_id'
    ];
}
