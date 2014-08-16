var gulp = require('gulp');

var jade = require('gulp-jade');
var less = require('gulp-less');


var styles = ['./less/main.less'];
var markup = ['./templates/*.jade'];

gulp.task('jade', function(){

	gulp.src(markup)
		.pipe(jade())
		.pipe(gulp.dest('./dist'));
});

gulp.task('less', function(){

	gulp.src(styles)
		.pipe(less())
		.pipe(gulp.dest('./css/'));
});

gulp.task('default', ['jade', 'less']);
