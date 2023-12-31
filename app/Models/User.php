<?php

namespace App\Models;
use App\Processors\AvatarProcessor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use LaravelAndVueJS\Traits\LaravelPermissionToVueJS;
class User extends Authenticatable
{
    use HasFactory, Notifiable;
    use LaravelPermissionToVueJS;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','Role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function file() {
        return $this->belongsTo(File::class);
    }

    public function getAvatarAttribute() {
        return AvatarProcessor::get($this);
    }
}
