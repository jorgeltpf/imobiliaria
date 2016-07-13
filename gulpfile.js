var elixir = require('laravel-elixir');
var gulp = require('gulp');

var paths = {
	'bootstrap': './resources/vendor/bootstrap-sass/assets/',
	'jquery': './resources/vendor/jquery/',
	'font-awesome': './resources/vendor/font-awesome/',
	'homejs': './resources/assets/js/',
	'homecss': './resources/assets/css/',
    'homefonts': './resources/assets/fonts/',
    'homeimgs': './resources/assets/img/'
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


    mix.copy(paths.homefonts + '/**', 'public/build/fonts');
    mix.copy(paths.homeimgs + '/**', 'public/img');
    mix.styles([
    	paths.homecss + 'owl.carousel.css',
    	paths.homecss + 'responsive.css',
    	paths.homecss + 'bootstrap.min.css',
    	paths.homecss + 'font-awesome.min.css',
    	paths.homecss + 'style.css',
	], 'public/css/home.css', '/resources');

	mix.scripts([
    	paths.homejs + 'bxslider.min.js',
    	paths.homejs + 'jquery.easing.1.3.min.js',
    	paths.homejs + 'owl.carousel.min.js'
	], 'public/js/home.js', '/resources');

	mix.scripts([
    	paths.homejs + 'main.js',
    	paths.homejs + 'script.slider.js',
    	paths.homejs + 'jquery.sticky.js'
	], 'public/js/home_main.js', '/resources');

    // Cache-bust all.css and all.js files.
    mix.version([
        'css/app.css',
        'css/home.css',
        'js/app.js',
        'js/home.js',
        'js/home_main.js'
    ]);
});
