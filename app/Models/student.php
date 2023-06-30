<?php

namespace App\Models;

use App\Processors\AvatarProcessor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'mname', 'gender', 'tell',  'POB', 'date', 'school',
        'file_id', 'DOB',  'village', 'sid', 'responsible', 'level'

    ];
    public function file()
    {
        return $this->belongsTo(File::class);
    }

    public function getAvatarFilenameAttribute()
    {
        if (!empty($this->file)) {
            return $this->file->name;
        }

        return null;
    }

    public function getAvatarAttribute()
    {
        return AvatarProcessor::get($this);
    }
}
