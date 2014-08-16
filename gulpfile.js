var gulp = require('gulp');

var jade = require('gulp-jade');


var less = ['./less/main.less'];
var markup = ['./templates/*.jade'];

gulp.task('jade', function(){

	gulp.src(markup)
		.pipe(jade())
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['jade']);
