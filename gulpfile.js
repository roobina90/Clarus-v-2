var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('./style/modules.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./style'));
});

gulp.task('default', ['less']);

gulp.watch('style/*.less', ['default']);

