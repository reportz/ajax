var gulp = require( 'gulp' );
var exec = require( 'child_process' ).exec;

gulp.task( 'deploy', function( done ) {
    return exec( 'cp -R ../../ajax/coverage ../../ajax/plato ./', function( err, stdout, stderr ) {
        exec( 'git push origin gh-pages', function() {
            done();
        });
    });
});

gulp.task( 'default', [ 'deploy' ] );