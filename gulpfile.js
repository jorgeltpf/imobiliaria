var elixir = require('laravel-elixir');
var gulp = require('gulp');

var paths = {
	'bootstrap': './resources/vendor/bootstrap-sass/assets/',
	'jquery': './resources/vendor/jquery/',
	'font-awesome': './resources/vendor/font-awesome/',
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss', 'public/css/',  {includePaths: [paths.bootstrap + 'stylesheets']});
    mix.copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts');
    mix.scripts([
    		paths.jquery + 'dist/jquery.js',
    		paths.bootstrap + 'javascripts/bootstrap.js'
		], 'public/js/app.js');
});
