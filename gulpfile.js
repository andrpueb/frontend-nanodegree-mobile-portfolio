// Include gulp
var gulp = require('gulp');


// Include Our Plugins
var connect = require('gulp-connect'),
  uglify = require('gulp-uglify'),
  newer = require('gulp-newer'),
  cssnano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin'),
  htmlcpr = require('gulp-htmlcpr'),
  htmlmin = require('gulp-htmlmin');


  gulp.task('images', function() {
  var out ='dist/./';
  return gulp.src('src/**/*.{png,jpg}')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});

// Concatenate & Minify JS
gulp.task('js', function() {
  return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/./'));
});


//Para que los html mantengan la referencia del js minificado
gulp.task('useref', function(){
  return gulp.src('src/**/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist/./'));
});

gulp.task('cssnano', function(){
  return gulp.src('src/**/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/./'));
});

gulp.task('minify', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/./'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

//gulp web server
gulp.task('webserver', function() {
  connect.server();
});


// Default Task
gulp.task('default', [ 'js', 'images', 'cssnano']);
