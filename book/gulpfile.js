const gulp = require('gulp')
const through = require('through2')
const gutil = require('gulp-util')
const markdown = require('gulp-markdown')
const dest = require('gulp-dest')
const jshtml = require('gulp-file2js')

gulp.task('default', function() {
  return gulp.src(['./**/*.md', '!node_modules/**'])
    .pipe(markdown())        
    .pipe(htmltomd())        
    .pipe(jshtml({modules: 'es6Object'}))        
    .pipe(gulp.dest('./dist'))		
})

function htmltomd() {
  return through.obj(function(file, enc, cb) {
    file.path = gutil.replaceExtension(file.path, '.md'),
    this.push(file)
    cb()
  }) 
}
