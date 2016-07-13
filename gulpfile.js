var setting = require('./setting/setting');


var gulp = require('gulp');
var server = require( 'gulp-develop-server' );
var livereload = require( 'gulp-livereload' );

//开发环境 开启服务
var options = {
    path: './bin/www'
};

var serverFiles = [
    './**/*.js',
    './**/*.html'
];

gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});

// If server scripts change, restart the server and then livereload.
gulp.task( 'default', [ 'server:start' ], function() {

    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
    }

    gulp.watch( serverFiles ).on( 'change', restart );
});