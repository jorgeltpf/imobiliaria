<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = "categories";

	/**
	 * Sao os campos que o laravel permite edicao
	 *
	 * @var array
	 */
	protected $fillable = ['description'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['id'];

}
