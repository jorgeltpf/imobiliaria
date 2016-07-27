var elixir = require('laravel-elixir');
var gulp = require('gulp');

var paths = {
    'bootstrap': './resources/vendor/bootstrap/dist/',
	'bootstrap_sass': './resources/vendor/bootstrap-sass/assets/',
    'bootstrap_switch': './resources/vendor/bootstrap-switch/dist/',
    'jquery': './resources/vendor/jquery/',
    'font-awesome': './resources/vendor/font-awesome/',
    'checkbox3': './resources/vendor/checkbox3/dist/',
    'datatables': './resources/vendor/datatables/media/',
    'matchHeight': './resources/vendor/matchHeight/dist/',
    'select2': './resources/vendor/select2/dist/',
    'Chart': './resources/vendor/Chart.js/dist/',
    'ace_builds': './resources/vendor/ace-builds/src/',
    'animate_css': './resources/vendor/animate.css/',
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
    mix.sass('app.scss', 'public/css/',  {includePaths: [paths.bootstrap_sass + 'stylesheets']});
    mix.copy(paths.bootstrap_sass + 'fonts/bootstrap/**', 'public/fonts');
    mix.scripts([
            paths.jquery + 'jquery.js',
            paths.bootstrap_sass + 'javascripts/bootstrap.js'
        ], 'public/js/app.js');


    mix.styles([
    	'./public/css/owl.carousel.css',
    	'./public/css/responsive.css',
    	'./public/css/bootstrap.min.css',
    	'./public/css/font-awesome.min.css',
    	'./public/css/style.css',
	], 'public/css/home.css', '/resources');

    mix.sass('dashboard.scss', 'public/css/', {
        includePaths: [
            'resources/assets/flat-blue.scss',
            'resources/assets/flat-green.scss',
        ]
    });

    mix.styles([
        paths.datatables + 'css/dataTables.bootstrap.css'
    ], 'public/css/datatables.css', '/resources');

    mix.styles([
        paths.checkbox3 + 'checkbox3.min.css'
    ], 'public/css/checkbox3.css', '/resources');

    mix.styles([
        paths.select2 + 'css/select2.min.css'
    ], 'public/css/select2.css', '/resources');

    mix.styles([
        // paths.bootstrap + 'css/bootstrap.min.css',
        paths.bootstrap_switch + 'css/bootstrap3/bootstrap-switch.min.css',
        paths.animate_css + 'animate.min.css'
    ], 'public/css/dashboard_switch.css', '/resources');

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

    mix.scripts([
        paths.bootstrap_switch + 'js/bootstrap-switch.min.js',
        paths.matchHeight + 'jquery.matchHeight-min.js'
    ], 'public/js/dashboard_switch.js', '/resources');

    mix.scripts([
        paths.Chart + 'Chart.js',
    ], 'public/js/Chart.js', '/resources')

    // Cache-bust all.css and all.js files.
    mix.version([
        'css/app.css',
        'css/home.css',
        'css/dashboard.css',
        'css/datatables.css',
        'css/checkbox3.css',
        'css/select2.css',
        'css/dashboard_switch.css',
        'js/app.js',
        'js/home.js',
        'js/home_main.js',
        'js/dashboard_switch.js',
        'js/Chart.js'
    ]);
});
