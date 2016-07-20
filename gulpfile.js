var elixir = require('laravel-elixir');
var gulp = require('gulp');

var paths = {
	'bootstrap': './resources/vendor/bootstrap-sass/assets/',
	'jquery': './resources/vendor/jquery/',
	'font-awesome': './resources/vendor/font-awesome/',
	'homejs': './resources/assets/js/',
	'homecss': './resources/assets/css/'
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

// Disable the creation of .map files
elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass('app.scss', 'public/css/',  {includePaths: [paths.bootstrap + 'stylesheets']});
    mix.copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts');
    mix.scripts([
            paths.jquery + 'jquery.js',
            paths.bootstrap + 'javascripts/bootstrap.js'
        ], 'public/js/app.js');


    mix.styles([
    	'./public/css/owl.carousel.css',
    	'./public/css/responsive.css',
    	'./public/css/bootstrap.min.css',
    	'./public/css/font-awesome.min.css',
    	'./public/css/style.css',
	], 'public/css/home.css', '/resources');

	mix.scripts([
    	'./public/js/bxslider.min.js',
    	'./public/js/jquery.easing.1.3.min.js',
    	'./public/js/owl.carousel.min.js'
	], 'public/js/home.js', '/resources');

	mix.scripts([
    	'./public/js/main.js',
    	'./public/js/script.slider.js',
    	'./public/js/jquery.sticky.js'
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
