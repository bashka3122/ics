<?php

namespace App\Models;

use App\Processors\AvatarProcessor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class school extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'email', 'region', 'district', 'village', 'no', 'manager', 'tell', 'oemail',
        'file_id', 'emisno', 'type'
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
