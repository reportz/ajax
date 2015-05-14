var gulp = require( 'gulp' );
var plato = require( 'plato' );
var exec = require( 'child_process' ).exec;
var moduleDir = '../../ajax';

gulp.task( 'deploy', [ 'plato' ], function( done ) {
    return exec( 'cp -R ' + moduleDir + '/coverage ' + moduleDir + '/plato ./',
    function( err, stdout, stderr ) {
        exec( 'git push origin gh-pages', function() {
            done();
        });
    });
});

gulp.task( 'plato', function( done ) {
  var files = [ moduleDir + '/src/**/*.js' ];
  var outputDir = './plato';
  var options = { title: '#Ajax' };
  function callback( report ) { done(); };
  plato.inspect( files, outputDir, options, callback );
});

gulp.task( 'default', [ 'deploy' ] );